
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SectionTransition from '@/components/SectionTransition';
import { cn } from '@/lib/utils';
import { getAllBlogs, type BlogPost } from '@/lib/blog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const loadPosts = async () => {
      const allPosts = await getAllBlogs();
      setPosts(allPosts);
      setLoading(false);
    };

    loadPosts();
  }, []);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SectionTransition>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Blog</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Insights and thoughts on cybersecurity, product management, and the intersection of technology and security.
              </p>
            </div>
          </SectionTransition>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <SectionTransition key={post.id} delay={100 + index * 100}>
                <Link
                  to={`/blog/${post.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl bg-card transition-all hover:shadow-lg hover:shadow-primary/5 h-full"
                >
                  <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-muted-foreground mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-primary font-medium transition-colors group-hover:text-primary/80">
                      Read Article
                      <ArrowRight className={cn(
                        "h-4 w-4 ml-1 transition-transform duration-300",
                        "group-hover:translate-x-1"
                      )} />
                    </div>
                  </div>
                </Link>
              </SectionTransition>
            ))}
          </div>

          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
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

export default Blog;
