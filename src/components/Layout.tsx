import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/news', label: 'News' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com/elitecuts', label: 'Facebook' },
    { icon: 'instagram', url: 'https://instagram.com/elitecuts', label: 'Instagram' },
    { icon: 'twitter', url: 'https://twitter.com/elitecuts', label: 'Twitter' },
    { icon: 'tiktok', url: 'https://tiktok.com/@elitecuts', label: 'TikTok' },
    { icon: 'youtube', url: 'https://youtube.com/elitecuts', label: 'YouTube' },
    { icon: 'whatsapp', url: 'https://wa.me/254712345678', label: 'WhatsApp' },
  ];

  return (
    <div className={cn(
      'min-h-screen transition-colors duration-300',
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    )}>
      {/* Navigation */}
      <nav className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-100'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform">
                <Icon name="scissors" size={24} className="text-white" />
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  Elite Cuts
                </span>
                <p className={cn(
                  'text-xs hidden md:block',
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                )}>Premium Barbershop</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'font-medium transition-colors relative group',
                    location.pathname === link.path
                      ? 'text-orange-500'
                      : theme === 'dark' ? 'text-gray-300 hover:text-orange-400' : 'text-gray-600 hover:text-orange-500'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all',
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={cn(
                  'p-2 rounded-full transition-colors',
                  theme === 'dark' 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                )}
              >
                <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
              </button>

              {/* Book Now Button */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105"
              >
                <Icon name="calendar" size={18} />
                Book Now
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  'lg:hidden p-2 rounded-lg',
                  theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                )}
              >
                <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className={cn(
              'lg:hidden py-4 border-t',
              theme === 'dark' ? 'border-gray-800' : 'border-gray-100'
            )}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block py-3 font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-orange-500'
                      : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-semibold rounded-full"
              >
                <Icon name="calendar" size={18} />
                Book Now
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className={cn(
        'border-t transition-colors',
        theme === 'dark' ? 'bg-gray-950 border-gray-800' : 'bg-gray-900 border-gray-800'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Icon name="scissors" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  Elite Cuts
                </span>
              </Link>
              <p className="text-gray-400 mb-6">
                Nairobi's premier barbershop delivering exceptional grooming experiences since 2019.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Classic Haircuts</li>
                <li>Beard Grooming</li>
                <li>Hot Towel Shave</li>
                <li>Hair Coloring</li>
                <li>Dreadlock Retwist</li>
                <li>Head Massage</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Icon name="location" size={20} className="text-orange-500 mt-0.5" />
                  <span>Kimathi Street, CBD<br />Nairobi, Kenya</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="phone" size={20} className="text-orange-500" />
                  <a href="tel:+254712345678" className="hover:text-orange-400">+254 712 345 678</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="email" size={20} className="text-orange-500" />
                  <a href="mailto:info@elitecuts.co.ke" className="hover:text-orange-400">info@elitecuts.co.ke</a>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="clock" size={20} className="text-orange-500" />
                  <span>Mon-Sat: 9AM - 8PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Elite Cuts Barbershop. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-400">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
