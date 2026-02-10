import React, { useState } from 'react';
import { Icon } from '@/components/Icon';
import { BookingForm } from '@/components/BookingForm';
import { openingHours } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'booking' | 'message'>('booking');

  const handleBookingSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const socialLinks = [
    { icon: 'facebook', label: 'Facebook', url: 'https://facebook.com/elitecuts', color: 'from-blue-500 to-blue-600' },
    { icon: 'instagram', label: 'Instagram', url: 'https://instagram.com/elitecuts', color: 'from-pink-500 to-purple-500' },
    { icon: 'twitter', label: 'Twitter/X', url: 'https://twitter.com/elitecuts', color: 'from-gray-700 to-gray-900' },
    { icon: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@elitecuts', color: 'from-gray-900 to-pink-500' },
    { icon: 'youtube', label: 'YouTube', url: 'https://youtube.com/elitecuts', color: 'from-red-500 to-red-600' },
    { icon: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/254712345678', color: 'from-green-500 to-green-600' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=600&fit=crop"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book your appointment or reach out to us. We're here to help you look your best.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Visit <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Elite Cuts</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="location" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      Kimathi Street, CBD<br />
                      Nairobi, Kenya
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-500 font-medium mt-2 hover:underline"
                    >
                      Get Directions <Icon name="arrow" size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+254712345678"
                      className={cn('block hover:text-orange-500', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                    >
                      +254 712 345 678
                    </a>
                    <a
                      href="https://wa.me/254712345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-500 font-medium mt-2 hover:underline"
                    >
                      <Icon name="whatsapp" size={16} />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="email" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@elitecuts.co.ke"
                      className={cn('hover:text-orange-500', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}
                    >
                      info@elitecuts.co.ke
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className={cn(
                'p-6 rounded-3xl',
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              )}>
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="clock" size={20} className="text-orange-500" />
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  {openingHours.map((day) => (
                    <div
                      key={day.day}
                      className={cn(
                        'flex justify-between items-center py-2 border-b last:border-0',
                        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                      )}
                    >
                      <span className={!day.isOpen ? 'text-gray-500' : ''}>{day.day}</span>
                      <span className={cn(
                        'font-medium',
                        day.isOpen ? 'text-green-500' : 'text-red-500'
                      )}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking/Contact Form */}
            <div>
              {/* Tab Switcher */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setActiveTab('booking')}
                  className={cn(
                    'flex-1 py-3 px-6 rounded-full font-semibold transition-all',
                    activeTab === 'booking'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                  )}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="calendar" size={18} />
                    Book Appointment
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('message')}
                  className={cn(
                    'flex-1 py-3 px-6 rounded-full font-semibold transition-all',
                    activeTab === 'message'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300'
                        : 'bg-gray-100 text-gray-600'
                  )}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Icon name="message" size={18} />
                    Send Message
                  </span>
                </button>
              </div>

              <div className={cn(
                'p-8 rounded-3xl',
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              )}>
                {activeTab === 'booking' ? (
                  <BookingForm onSubmit={handleBookingSubmit} />
                ) : (
                  <form className="space-y-5">
                    <div>
                      <label className={cn(
                        'block text-sm font-medium mb-2',
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      )}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500',
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-200'
                        )}
                        placeholder="John Kamau"
                      />
                    </div>
                    <div>
                      <label className={cn(
                        'block text-sm font-medium mb-2',
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      )}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500',
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-200'
                        )}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className={cn(
                        'block text-sm font-medium mb-2',
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      )}>
                        Subject
                      </label>
                      <input
                        type="text"
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500',
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-200'
                        )}
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className={cn(
                        'block text-sm font-medium mb-2',
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      )}>
                        Message
                      </label>
                      <textarea
                        rows={5}
                        className={cn(
                          'w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-orange-500 resize-none',
                          theme === 'dark'
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-200'
                        )}
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Icon name="message" size={20} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              FIND US
            </span>
            <h2 className="text-4xl font-bold">
              Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Location</span>
            </h2>
          </div>

          <div className={cn(
            'rounded-3xl overflow-hidden shadow-2xl',
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          )}>
            <div className="aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819559876396!2d36.81627!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNTkuOSJTIDM2wrA0OCc1OC42IkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Cuts Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              CONNECT WITH US
            </span>
            <h2 className="text-4xl font-bold">
              Follow Us on <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Social</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group p-6 rounded-2xl text-center transition-all hover:shadow-xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                )}
              >
                <div className={cn(
                  'w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r transition-transform group-hover:scale-110',
                  social.color
                )}>
                  <Icon name={social.icon} size={28} />
                </div>
                <p className="font-semibold">{social.label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              FAQ
            </span>
            <h2 className="text-4xl font-bold">
              Common <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Do I need to book in advance?', a: 'Walk-ins are welcome, but we recommend booking in advance to guarantee your preferred time slot.' },
              { q: 'What payment methods do you accept?', a: 'We accept cash, M-Pesa, Visa, and Mastercard.' },
              { q: 'How long does a typical haircut take?', a: 'A standard haircut takes about 30-45 minutes. More complex styles may take longer.' },
              { q: 'Do you offer services for children?', a: 'Yes! We have special rates and a comfortable environment for kids.' },
              { q: 'Can I cancel or reschedule my appointment?', a: 'Yes, please give us at least 2 hours notice to cancel or reschedule.' },
            ].map((faq, i) => (
              <div
                key={i}
                className={cn(
                  'p-6 rounded-2xl',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50">
          <Icon name="check" size={24} />
          <div>
            <p className="font-bold">Booking Confirmed!</p>
            <p className="text-sm opacity-90">We'll contact you shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
};
