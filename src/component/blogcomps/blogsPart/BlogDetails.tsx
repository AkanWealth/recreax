import React from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from 'next/font/google';
import { BlogDetailProps } from '@/types/blog';
import Image from 'next/image';

const bricolage = Bricolage_Grotesque({
  weight: ['700'],
  subsets: ['latin'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta-sans',
});

const BlogDetail: React.FC<BlogDetailProps> = ({ blog, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </button>
          <div className="mb-4">
            <span className={`inline-block text-xs px-3 py-1 rounded-full ${blog.categoryColor}`}>
              {blog.category}
            </span>
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 ${bricolage.className}`}>
            {blog.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{blog.date}</span>
            <span className="mx-3">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          {blog.image ? (
            <Image src={blog.image} alt={blog.title} height={385} width={1027}  quality={100}
                priority className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full ${blog.gradient} flex items-center justify-center`}>
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-lg"></div>
            </div>
          )}
        </div>

        {/* Content */}
        <article className={`prose prose-lg max-w-none ${plusJakarta.className}`}>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;