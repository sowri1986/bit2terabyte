
import { type ReactNode } from 'react';

export interface BlogPost {
    id: string; // Changed to string for flexibility (filename based or manual)
    title: string;
    excerpt: string;
    content: ReactNode;
    date: string;
    readTime: string;
    category: string;
    image: string;
}

// Helper to sort blogs by date
export const sortBlogsByDate = (blogs: BlogPost[]) => {
    return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getAllBlogs = async (): Promise<BlogPost[]> => {
    const modules = import.meta.glob('../content/blogs/*.tsx', { eager: true });
    const blogs: BlogPost[] = [];

    for (const path in modules) {
        const mod = modules[path] as { default: BlogPost };
        if (mod.default) {
            blogs.push(mod.default);
        }
    }

    return sortBlogsByDate(blogs);
};

export const getBlogById = async (id: string): Promise<BlogPost | undefined> => {
    const blogs = await getAllBlogs();
    return blogs.find((blog) => blog.id === id);
};
