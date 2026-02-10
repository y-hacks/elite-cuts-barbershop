import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { blogPosts } from '@/data/blog';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const Blog: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(p => p.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === selectedCategory);

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1920&h=600&fit=crop"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            INSIGHTS & TIPS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tips, trends, and expert advice on men's grooming and style.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={cn(
          'py-16',
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        )}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to={`/blog/${featuredPost.id}`}
              className={cn(
                'group grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden transition-all hover:shadow-2xl',
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              )}
            >
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  ⭐ FEATURED
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full w-fit mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className={cn('text-lg mb-6', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                  <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>•</span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {featuredPost.date}
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>•</span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className={cn(
        'py-8 border-b',
        theme === 'dark' ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  'px-5 py-2.5 rounded-full font-medium whitespace-nowrap transition-all',
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className={cn(
                  'group rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className={cn('text-sm mb-4 line-clamp-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {post.author}
                    </span>
                    <span className="text-orange-500 font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
            <Icon name="email" size={32} className="text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Stay <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Updated</span>
          </h2>
          <p className={cn('text-lg mb-8', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
            Subscribe to our newsletter for the latest tips, trends, and exclusive offers.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className={cn(
                'flex-1 px-5 py-3 rounded-full border focus:ring-2 focus:ring-orange-500 focus:border-orange-500',
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-200'
              )}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export const BlogPost: React.FC = () => {
  const { theme } = useTheme();
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-orange-500 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.charAt(0)}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{post.date}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-300">{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'prose prose-lg max-w-none',
            theme === 'dark' ? 'prose-invert' : ''
          )}>
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={i} className="text-2xl font-bold mt-8 mb-4 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              return (
                <p key={i} className={cn('mb-4', theme === 'dark' ? 'text-gray-300' : 'text-gray-700')}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share */}
          <div className={cn(
            'mt-12 pt-8 border-t',
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          )}>
            <p className="font-bold mb-4">Share this article:</p>
            <div className="flex gap-3">
              {['facebook', 'twitter', 'whatsapp'].map((social) => (
                <button
                  key={social}
                  className={cn(
                    'w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110',
                    'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  )}
                >
                  <Icon name={social} size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={cn(
          'py-16',
          theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
        )}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className={cn(
                    'group flex gap-6 p-4 rounded-2xl transition-all hover:shadow-lg',
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  )}
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-32 h-32 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <span className="text-orange-500 text-sm font-medium mb-1">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-bold text-lg group-hover:text-orange-500 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className={cn('text-sm mt-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                      {relatedPost.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className={cn(
        'py-8',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:underline"
          >
            <Icon name="arrow" size={16} className="rotate-180" />
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
};
