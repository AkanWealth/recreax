export interface BlogPost {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image?: string;
  gradient: string;
  excerpt: string;
  content: string;
}

export interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  categoryColor?: string;
  date: string;
  readTime: string;
  image?: string;
  gradient?: string;
  excerpt: string;
  onReadMore: (id: number) => void;
}

export interface BlogDetailProps {
  blog: BlogPost;
  onBack: () => void;
}

export interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export interface BlogSectionProps {
  searchQuery: string;
}