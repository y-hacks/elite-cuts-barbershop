import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { BookingForm } from '@/components/BookingForm';
import { services, openingHours, teamMembers } from '@/data/services';
import { blogPosts, newsItems } from '@/data/blog';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const [showBooking, setShowBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookingSubmit = () => {
    setShowBooking(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const featuredServices = services.filter(s => s.popular).slice(0, 4);
  const featuredBlogs = blogPosts.filter(b => b.featured).slice(0, 2);
  const latestNews = newsItems.slice(0, 3);

  const reviews = [
    { id: 1, name: 'Peter Njoroge', rating: 5, comment: 'Best barbershop in Nairobi! The fades are always on point.', service: 'Fade Haircut', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { id: 2, name: 'Michael Oduya', rating: 5, comment: 'Professional service, great atmosphere. My go-to spot for grooming.', service: 'VIP Package', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { id: 3, name: 'David Mwangi', rating: 5, comment: 'They took amazing care of my dreads. Highly recommend!', service: 'Dreadlock Retwist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&h=1080&fit=crop"
            alt="Barbershop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-orange-500/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-orange-300 text-sm font-medium">Walk-ins Welcome</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Look Sharp.
              <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Feel Confident.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nairobi's premier barbershop delivering exceptional grooming experiences. 
              From classic cuts to modern styles, we've got you covered.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setShowBooking(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105"
              >
                <Icon name="calendar" size={20} />
                Book Your Spot
              </button>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <Icon name="scissors" size={20} />
                View Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">2000+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">5+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">4.9</p>
                <p className="text-gray-400">Star Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-orange-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Grooming</span> Services
            </h2>
            <p className={cn('text-lg max-w-2xl mx-auto', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
              Expert styling tailored to your personality. From traditional cuts to modern trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className={cn(
                  'group relative rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-orange-400 text-sm font-medium">{service.category}</span>
                    <h3 className="text-white font-bold text-lg">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className={cn('text-sm mb-4 line-clamp-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon name="clock" size={16} />
                      {service.duration}
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      KES {service.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              View All Services
              <Icon name="arrow" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-950' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
                WHY ELITE CUTS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                More Than Just a <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Haircut</span>
              </h2>
              <p className={cn('text-lg mb-8', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                We deliver an experience. Premium service, skilled barbers, and a welcoming atmosphere that keeps you coming back.
              </p>

              <div className="space-y-6">
                {[
                  { icon: 'award', title: 'Expert Barbers', desc: 'Our team has 5-15+ years of experience' },
                  { icon: 'scissors', title: 'Premium Products', desc: 'Only the best grooming products used' },
                  { icon: 'clock', title: 'Flexible Hours', desc: 'Open 6 days a week for your convenience' },
                  { icon: 'heart', title: 'Customer First', desc: 'Your satisfaction is our priority' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={28} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl transform rotate-3 opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=700&fit=crop"
                alt="Barber at work"
                className="relative rounded-3xl shadow-2xl"
              />
              <div className={cn(
                'absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl',
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              )}>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-${1500000000000 + i * 7000000}?w=50&h=50&fit=crop`}
                        alt="Client"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold">2000+ Clients</p>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Icon key={i} name="star" size={14} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              MEET THE TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Expert</span> Barbers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={cn(
                  'group text-center rounded-3xl p-6 transition-all hover:shadow-xl',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-orange-500/20 group-hover:border-orange-500 transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {member.experience}
                  </div>
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-500 text-sm mb-3">{member.role}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {member.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className={cn(
                        'text-xs px-2 py-1 rounded-full',
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      )}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-950' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Clients</span> Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className={cn(
                  'p-8 rounded-3xl relative',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                )}
              >
                <Icon name="quote" size={40} className="text-orange-500/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="star" size={20} className="text-yellow-400" />
                  ))}
                </div>
                <p className={cn('text-lg mb-6', theme === 'dark' ? 'text-gray-300' : 'text-gray-700')}>
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-orange-500 text-sm">{review.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
                OPENING HOURS
              </span>
              <h2 className="text-4xl font-bold mb-6">
                We're <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Open</span> For You
              </h2>
              <p className={cn('mb-8', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                Walk-ins welcome based on availability. For guaranteed service, we recommend booking in advance.
              </p>

              <div className="space-y-3">
                {openingHours.map((day) => (
                  <div
                    key={day.day}
                    className={cn(
                      'flex justify-between items-center p-4 rounded-xl',
                      theme === 'dark' ? 'bg-gray-800' : 'bg-white',
                      !day.isOpen && 'opacity-50'
                    )}
                  >
                    <span className="font-medium">{day.day}</span>
                    <span className={day.isOpen ? 'text-green-500 font-semibold' : 'text-red-500'}>
                      {day.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={cn(
              'rounded-3xl overflow-hidden',
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            )}>
              <div className="aspect-video bg-gray-200 relative">
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
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Find Us</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  Kimathi Street, CBD<br />
                  Nairobi, Kenya
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-orange-500 font-semibold hover:underline"
                >
                  Get Directions
                  <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog & News Preview */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-950' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Blog */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Latest from Blog</h2>
                <Link to="/blog" className="text-orange-500 font-semibold hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-6">
                {featuredBlogs.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className={cn(
                      'flex gap-4 p-4 rounded-2xl transition-all hover:shadow-lg',
                      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
                    )}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <span className="text-orange-500 text-sm font-medium">{post.category}</span>
                      <h3 className="font-bold line-clamp-2">{post.title}</h3>
                      <p className={cn('text-sm mt-1', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                        {post.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* News */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Latest News</h2>
                <Link to="/news" className="text-orange-500 font-semibold hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {latestNews.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      'p-4 rounded-2xl',
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    )}
                  >
                    <span className="inline-block px-2 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className={cn('text-sm mt-1 line-clamp-2', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                      {item.excerpt}
                    </p>
                    <p className={cn('text-xs mt-2', theme === 'dark' ? 'text-gray-500' : 'text-gray-400')}>
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop"
            alt="CTA Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Look Your <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Best</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your appointment today and experience the Elite Cuts difference.
          </p>
          <button
            onClick={() => setShowBooking(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:shadow-xl hover:shadow-orange-500/30 transition-all hover:scale-105"
          >
            <Icon name="calendar" size={24} />
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && (
        <BookingForm
          isModal
          onSubmit={handleBookingSubmit}
          onClose={() => setShowBooking(false)}
        />
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-slide-up z-50">
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
