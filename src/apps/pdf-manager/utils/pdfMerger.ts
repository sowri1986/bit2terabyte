import { PDFDocument } from 'pdf-lib';

export interface PDFFile {
  file: File;
  name: string;
  size: number;
}

/**
 * Merges multiple PDF files into a single PDF
 * @param files Array of PDF files to merge
 * @returns Merged PDF as a Uint8Array
 */
export async function mergePDFs(files: File[]): Promise<Uint8Array> {
  if (files.length === 0) {
    throw new Error('No PDF files provided');
  }

  // Create a new PDF document
  const mergedPdf = await PDFDocument.create();

  // Process each PDF file
  for (const file of files) {
    try {
      // Read the file as an array buffer
      const arrayBuffer = await file.arrayBuffer();
      
      // Load the PDF document
      const pdf = await PDFDocument.load(arrayBuffer);
      
      // Copy all pages from the loaded PDF to the merged PDF
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    } catch (error) {
      throw new Error(`Failed to process ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  // Generate the merged PDF as bytes
  const pdfBytes = await mergedPdf.save();
  return pdfBytes;
}

/**
 * Validates if a file is a PDF
 * @param file File to validate
 * @returns true if the file is a PDF, false otherwise
 */
export function isValidPDF(file: File): boolean {
  return file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
}

/**
 * Formats file size to human-readable format
 * @param bytes File size in bytes
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

