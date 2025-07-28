"use client";
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogSectionProps } from '@/types/blog';
import { blogPosts } from '@/data/blogData';
import { filterBlogsBySearch, filterBlogsByCategory, paginateBlogs } from '@/utils/blogUtils';
import CategoryTabs from './blogsPart/CatergoryTabs';
import BlogCard from './blogsPart/BlogCard';
import BlogDetail from './blogsPart/BlogDetails';

const BlogSection: React.FC<BlogSectionProps> = ({ searchQuery }) => {
  const [activeCategory, setActiveCategory] = useState('Latest Post');
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Filter blogs based on search query and active category
  const filteredBlogs = useMemo(() => {
    let filtered = filterBlogsBySearch(blogPosts, searchQuery);
    filtered = filterBlogsByCategory(filtered, activeCategory);
    return filtered;
  }, [searchQuery, activeCategory]);

  // Pagination
  const paginationData = paginateBlogs(filteredBlogs, currentPage, blogsPerPage);

  // Handle blog selection
  const handleReadMore = (id: number) => {
    setSelectedBlog(id);
  };

  const handleBackToBlog = () => {
    setSelectedBlog(null);
  };

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  // If a blog is selected, show the detail view
  if (selectedBlog) {
    const blog = blogPosts.find(b => b.id === selectedBlog);
    if (blog) {
      return <BlogDetail blog={blog} onBack={handleBackToBlog} />;
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-5xl">
          <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

        {/* Search Results Info */}
        {searchQuery.trim() && (
          <div className="mb-6">
            <p className="text-gray-600">
              Found {filteredBlogs.length} result{filteredBlogs.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
            </p>
          </div>
        )}

        {/* Blog Grid */}
        {paginationData.blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginationData.blogs.map((post) => (
              <BlogCard
                key={post.id}
                {...post}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found matching your criteria.</p>
          </div>
        )}

        {/* Pagination */}
        {paginationData.totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={!paginationData.hasPrev}
              className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>
            
            <span className="text-gray-600">
              Page {currentPage} of {paginationData.totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, paginationData.totalPages))}
              disabled={!paginationData.hasNext}
              className="flex items-center px-4 py-2 text-white bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;