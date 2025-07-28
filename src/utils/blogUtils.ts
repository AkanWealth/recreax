import { BlogPost } from "@/types/blog";
export const filterBlogsBySearch = (blogs: BlogPost[], searchQuery: string): BlogPost[] => {
  if (!searchQuery.trim()) return blogs;
  
  return blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export const filterBlogsByCategory = (blogs: BlogPost[], category: string): BlogPost[] => {
  if (category === 'Latest Post') return blogs;
  return blogs.filter(blog => blog.category === category);
};

export const paginateBlogs = (blogs: BlogPost[], page: number, blogsPerPage: number) => {
  const startIndex = (page - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  
  return {
    blogs: blogs.slice(startIndex, endIndex),
    totalPages: Math.ceil(blogs.length / blogsPerPage),
    hasNext: endIndex < blogs.length,
    hasPrev: page > 1
  };
};