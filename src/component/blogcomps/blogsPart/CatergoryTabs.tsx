import React from 'react';
import { categories } from '@/data/blogData';
import { CategoryTabsProps } from '@/types/blog';

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="border-b border-gray-200 mb-8">
      <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'border-cyan-400 text-cyan-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryTabs;