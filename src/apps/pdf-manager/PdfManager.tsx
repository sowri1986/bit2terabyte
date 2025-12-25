import React, { useState, useRef } from 'react';
import { Upload, X, FileText, Download, ArrowUpDown, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTransition from '@/components/SectionTransition';
import { cn } from '@/lib/utils';
import { mergePDFs, isValidPDF, formatFileSize, PDFFile } from './utils/pdfMerger';

const PdfManager: React.FC = () => {
  const [files, setFiles] = useState<PDFFile[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergedPdfUrl, setMergedPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    setError(null);
    const newFiles: PDFFile[] = [];

    Array.from(selectedFiles).forEach((file) => {
      if (!isValidPDF(file)) {
        setError(`${file.name} is not a valid PDF file. Only PDF files are allowed.`);
        return;
      }

      // Check file size (limit to 50MB per file)
      const maxSize = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSize) {
        setError(`${file.name} is too large. Maximum file size is 50MB.`);
        return;
      }

      newFiles.push({
        file,
        name: file.name,
        size: file.size,
      });
    });

    if (newFiles.length > 0) {
      setFiles((prev) => [...prev, ...newFiles]);
      setSuccess(false);
      setMergedPdfUrl(null);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files);
    // Reset input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setSuccess(false);
    setMergedPdfUrl(null);
  };

  const moveFile = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === files.length - 1)
    ) {
      return;
    }

    const newFiles = [...files];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    [newFiles[index], newFiles[targetIndex]] = [newFiles[targetIndex], newFiles[index]];
    setFiles(newFiles);
    setSuccess(false);
    setMergedPdfUrl(null);
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError('Please select at least 2 PDF files to merge.');
      return;
    }

    setIsMerging(true);
    setError(null);
    setSuccess(false);
    setMergedPdfUrl(null);

    try {
      const fileObjects = files.map((f) => f.file);
      const mergedPdfBytes = await mergePDFs(fileObjects);

      // Create a blob and URL for download
      const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setMergedPdfUrl(url);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to merge PDFs. Please try again.');
    } finally {
      setIsMerging(false);
    }
  };

  const handleDownload = () => {
    if (!mergedPdfUrl) return;

    const link = document.createElement('a');
    link.href = mergedPdfUrl;
    link.download = 'merged.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      // Remove drag over styling
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    handleFileSelect(e.dataTransfer.files);
  };

  const clearAll = () => {
    setFiles([]);
    setError(null);
    setSuccess(false);
    if (mergedPdfUrl) {
      URL.revokeObjectURL(mergedPdfUrl);
      setMergedPdfUrl(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionTransition>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">PDF Manager</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Merge multiple PDF files into one. Simply upload your PDFs, arrange them in order, and merge.
              </p>
            </div>
          </SectionTransition>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* File Upload Area */}
            <SectionTransition delay={100}>
              <div
                className={cn(
                  "glass-card p-8 rounded-xl border-2 border-dashed transition-all",
                  "hover:border-primary/50 cursor-pointer"
                )}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  multiple
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload PDF Files</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop PDF files here, or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Maximum file size: 50MB per file
                  </p>
                </div>
              </div>
            </SectionTransition>

            {/* Error Message */}
            {error && (
              <SectionTransition delay={150}>
                <div className="glass-card p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start">
                  <AlertCircle className="h-5 w-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-destructive text-sm">{error}</p>
                </div>
              </SectionTransition>
            )}

            {/* Success Message */}
            {success && (
              <SectionTransition delay={150}>
                <div className="glass-card p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-green-500 text-sm">PDFs merged successfully! You can now download the merged file.</p>
                </div>
              </SectionTransition>
            )}

            {/* File List */}
            {files.length > 0 && (
              <SectionTransition delay={200}>
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Selected Files ({files.length})</h3>
                    <button
                      onClick={clearAll}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {files.map((pdfFile, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-background rounded-lg border border-input"
                      >
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="bg-primary/10 p-2 rounded-lg text-primary mr-3 flex-shrink-0">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{pdfFile.name}</p>
                            <p className="text-xs text-muted-foreground">{formatFileSize(pdfFile.size)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              moveFile(index, 'up');
                            }}
                            disabled={index === 0}
                            className={cn(
                              "p-2 rounded-lg transition-colors",
                              index === 0
                                ? "text-muted-foreground/50 cursor-not-allowed"
                                : "text-foreground hover:bg-secondary"
                            )}
                            aria-label="Move up"
                          >
                            <ArrowUpDown className="h-4 w-4 rotate-180" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              moveFile(index, 'down');
                            }}
                            disabled={index === files.length - 1}
                            className={cn(
                              "p-2 rounded-lg transition-colors",
                              index === files.length - 1
                                ? "text-muted-foreground/50 cursor-not-allowed"
                                : "text-foreground hover:bg-secondary"
                            )}
                            aria-label="Move down"
                          >
                            <ArrowUpDown className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(index);
                            }}
                            className="p-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                            aria-label="Remove file"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionTransition>
            )}

            {/* Action Buttons */}
            {files.length >= 2 && (
              <SectionTransition delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleMerge}
                    disabled={isMerging || files.length < 2}
                    className={cn(
                      "flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all",
                      "hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed",
                      "flex items-center justify-center"
                    )}
                  >
                    {isMerging ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Merging PDFs...
                      </>
                    ) : (
                      <>
                        <FileText className="h-5 w-5 mr-2" />
                        Merge PDFs
                      </>
                    )}
                  </button>
                  
                  {mergedPdfUrl && (
                    <button
                      onClick={handleDownload}
                      className={cn(
                        "px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium transition-all",
                        "hover:bg-secondary/80 flex items-center justify-center"
                      )}
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Merged PDF
                    </button>
                  )}
                </div>
              </SectionTransition>
            )}
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bit2Terabyte. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PdfManager;

