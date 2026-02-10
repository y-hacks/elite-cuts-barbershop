import React, { useState } from 'react';
import { Icon } from '@/components/Icon';
import { newsItems } from '@/data/blog';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const News: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(newsItems.map(n => n.category))];
  
  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(n => n.category === selectedCategory);

  const featuredNews = newsItems[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=600&fit=crop"
            alt="News Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            STAY INFORMED
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">News</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with Elite Cuts announcements, events, and industry news.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'group grid md:grid-cols-2 gap-8 rounded-3xl overflow-hidden transition-all hover:shadow-2xl',
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
          )}>
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                📢 LATEST
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-semibold rounded-full">
                  {featuredNews.category}
                </span>
                <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {featuredNews.date}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                {featuredNews.title}
              </h2>
              <p className={cn('text-lg', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                {featuredNews.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* News Grid */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className={cn(
                  'group rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className={cn('text-sm mb-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-500')}>
                    {item.date}
                  </p>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className={cn('text-sm line-clamp-3', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversation Starters */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              💬 CONVERSATION STARTERS
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Topics to <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Discuss</span> at the Barber
            </h2>
            <p className={cn('text-lg max-w-2xl mx-auto', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
              Hot topics and trending discussions to make your barber visit more engaging!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sports & Athletics */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl mb-4">
                ⚽
              </div>
              <h3 className="font-bold text-xl mb-4">Sports & Athletics</h3>
              <ul className="space-y-3">
                {[
                  'FIFA World Cup 2026 qualifiers - Harambee Stars chances',
                  'Premier League title race: Arsenal vs Liverpool vs Man City',
                  'Victor Wanyama\'s impact on Kenyan football legacy',
                  'NBA playoffs predictions and MVP race',
                  'Kenyan athletes dominating marathons worldwide',
                  'AFCON 2025 expectations for East Africa',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Entertainment & Pop Culture */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-pink-50 to-rose-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-3xl mb-4">
                🎬
              </div>
              <h3 className="font-bold text-xl mb-4">Entertainment & Pop Culture</h3>
              <ul className="space-y-3">
                {[
                  'Sauti Sol\'s solo projects vs group dynamics',
                  'Nairobi\'s booming stand-up comedy scene',
                  'Netflix\'s investment in African content',
                  'Beyoncé\'s influence on African music',
                  'Kenyan movies making it to international festivals',
                  'TikTok challenges taking over Kenya',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-pink-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology & Innovation */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-cyan-50 to-blue-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl mb-4">
                📱
              </div>
              <h3 className="font-bold text-xl mb-4">Tech & Innovation</h3>
              <ul className="space-y-3">
                {[
                  'M-Pesa\'s global expansion and future',
                  'AI replacing jobs vs creating opportunities',
                  'Silicon Savannah: Kenya\'s tech hub growth',
                  'Electric vehicles hitting Kenyan roads',
                  'Remote work culture post-pandemic',
                  'Crypto and blockchain adoption in Africa',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-cyan-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business & Entrepreneurship */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-emerald-50 to-green-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-3xl mb-4">
                💼
              </div>
              <h3 className="font-bold text-xl mb-4">Business & Hustle</h3>
              <ul className="space-y-3">
                {[
                  'Side hustle ideas that actually work in Kenya',
                  'Real estate boom in Nairobi outskirts',
                  'Youth unemployment and creative solutions',
                  'Success stories of Kenyan entrepreneurs',
                  'The rise of content creation as a career',
                  'Investment opportunities for young Kenyans',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Politics & Current Affairs */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-amber-50 to-orange-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-3xl mb-4">
                🌍
              </div>
              <h3 className="font-bold text-xl mb-4">Politics & Society</h3>
              <ul className="space-y-3">
                {[
                  'Kenya\'s leadership in East African integration',
                  'Climate change affecting Kenyan agriculture',
                  'Youth participation in politics 2027 outlook',
                  'Infrastructure development in Nairobi',
                  'Cost of living and economic policies',
                  'Devolution success stories in counties',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifestyle & Relationships */}
            <div className={cn(
              'p-6 rounded-3xl transition-all hover:shadow-xl hover:-translate-y-1',
              theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-purple-50 to-violet-50'
            )}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-3xl mb-4">
                💬
              </div>
              <h3 className="font-bold text-xl mb-4">Lifestyle & Culture</h3>
              <ul className="space-y-3">
                {[
                  'Modern dating vs traditional relationships',
                  'Mental health awareness among Kenyan men',
                  'Fitness culture and gym trends in Nairobi',
                  'Food culture: From chapo madondo to fine dining',
                  'Travel destinations every Kenyan should visit',
                  'The evolution of Kenyan slang and sheng',
                ].map((topic, j) => (
                  <li
                    key={j}
                    className={cn('text-sm flex items-start gap-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                  >
                    <Icon name="message-circle" size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Hot Topics */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-500 rounded-full text-sm font-semibold mb-4">
              🔥 TRENDING THIS WEEK
            </span>
            <h2 className="text-4xl font-bold">
              What Everyone is <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Talking About</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Euro 2024 Finals',
                desc: 'Spain\'s young squad dominating European football. Who saw this coming?',
                icon: '🏆',
                color: 'from-yellow-400 to-orange-500',
              },
              {
                title: 'Nairobi Expressway',
                desc: 'How the expressway has transformed daily commutes and business in the city.',
                icon: '🛣️',
                color: 'from-blue-400 to-cyan-500',
              },
              {
                title: 'Gen Z in Politics',
                desc: 'The youth movement reshaping political discourse across Africa.',
                icon: '✊',
                color: 'from-green-400 to-emerald-500',
              },
              {
                title: 'Tyla\'s Global Rise',
                desc: 'South African singer taking over the world with Amapiano vibes.',
                icon: '🎵',
                color: 'from-pink-400 to-rose-500',
              },
            ].map((item, i) => (
              <div
                key={i}
                className={cn(
                  'p-6 rounded-3xl text-center transition-all hover:shadow-2xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className={cn(
                  'w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center text-4xl mb-4 shadow-lg',
                  item.color
                )}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className={cn('text-sm', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barber Banter Section */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              🗣️ BARBER BANTER
            </span>
            <h2 className="text-4xl font-bold mb-4">
              Classic <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Barbershop Debates</span>
            </h2>
            <p className={cn('text-lg max-w-2xl mx-auto', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
              The timeless arguments that never get old
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                topic: 'Messi vs Ronaldo',
                stance1: 'Messi is the GOAT - natural talent',
                stance2: 'Ronaldo worked harder for his success',
                votes1: 62,
                votes2: 38,
              },
              {
                topic: 'Team Mafisi vs Team Mafisi',
                stance1: 'Marriage is the ultimate goal',
                stance2: 'Focus on yourself first, marriage later',
                votes1: 45,
                votes2: 55,
              },
              {
                topic: 'Arsenal vs Man United',
                stance1: 'Arsenal playing the best football',
                stance2: 'United\'s history makes them bigger',
                votes1: 58,
                votes2: 42,
              },
              {
                topic: 'Hustle vs Employment',
                stance1: 'Business gives you freedom',
                stance2: 'Employment provides security',
                votes1: 67,
                votes2: 33,
              },
            ].map((debate, i) => (
              <div
                key={i}
                className={cn(
                  'p-6 rounded-3xl',
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'
                )}
              >
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="message-square" size={20} className="text-orange-500" />
                  {debate.topic}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{debate.stance1}</span>
                      <span className="font-semibold text-green-500">{debate.votes1}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000"
                        style={{ width: `${debate.votes1}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{debate.stance2}</span>
                      <span className="font-semibold text-orange-500">{debate.votes2}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000"
                        style={{ width: `${debate.votes2}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Connected
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Follow us on social media for real-time updates, tips, and exclusive offers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { icon: 'instagram', label: '@elitecuts', url: 'https://instagram.com/elitecuts' },
              { icon: 'facebook', label: 'Elite Cuts', url: 'https://facebook.com/elitecuts' },
              { icon: 'twitter', label: '@elitecuts', url: 'https://twitter.com/elitecuts' },
              { icon: 'tiktok', label: '@elitecuts', url: 'https://tiktok.com/@elitecuts' },
              { icon: 'youtube', label: 'Elite Cuts', url: 'https://youtube.com/elitecuts' },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
              >
                <Icon name={social.icon} size={20} />
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
