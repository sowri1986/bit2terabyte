
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SectionTransition from './SectionTransition';
import { cn } from '@/lib/utils';
import { blogPosts } from '@/data/blogPosts';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="section-container">
      <SectionTransition>
        <div className="text-center mb-12">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Latest Insights & Thoughts</p>
        </div>
      </SectionTransition>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, index) => (
          <SectionTransition key={post.id} delay={100 + index * 100}>
            <Link 
              to={`/blog/${post.id}`} 
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
      
      <SectionTransition delay={400}>
        <div className="flex justify-center mt-12">
          <Link 
            to="/blog" 
            className="flex items-center px-6 py-3 border border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-colors"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </SectionTransition>
    </section>
  );
};

export default BlogSection;
