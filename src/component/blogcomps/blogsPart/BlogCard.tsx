import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { BlogCardProps } from '@/types/blog';
import Image from 'next/image';

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, title, category, categoryColor, date, readTime, image, gradient, excerpt, onReadMore 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className={`h-48 relative ${gradient} flex items-center justify-center`}>
        {image ? (
          <Image src={image} alt={title} height={370} width={198} quality={100}
                priority className="w-full h-full object-cover" />
        ) : (
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg"></div>
        )}
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className={`inline-block text-xs px-2 py-1 rounded-full ${categoryColor || 'bg-gray-200'}`}>
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{date}</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime}</span>
          </div>
          <button
            onClick={() => onReadMore(id)}
            className="text-cyan-600 hover:text-cyan-800 font-medium text-sm"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;