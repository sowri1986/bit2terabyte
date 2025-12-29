
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTransition from '@/components/SectionTransition';
import { cn } from '@/lib/utils';
import { getBlogById, type BlogPost as BlogPostType } from '@/lib/blog';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      const foundPost = await getBlogById(id);

      if (!foundPost) {
        navigate('/not-found');
        return;
      }

      setPost(foundPost);
      setLoading(false);
    };

    fetchPost();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </main>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionTransition>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-sm text-primary mb-6 hover:text-primary/80 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to all articles
            </button>
          </SectionTransition>

          <SectionTransition delay={100}>
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                {post.title}
              </h1>

              <div className={cn(
                "w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8",
                "bg-cover bg-center"
              )}
                style={{ backgroundImage: `url(${post.image})` }}
              />

              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content}
              </div>
            </div>
          </SectionTransition>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bit2Terabyte. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
