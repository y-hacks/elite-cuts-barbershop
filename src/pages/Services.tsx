import React, { useState } from 'react';
import { Icon } from '@/components/Icon';
import { BookingForm } from '@/components/BookingForm';
import { services } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const Services: React.FC = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showBooking, setShowBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = ['All', ...new Set(services.map(s => s.category))];
  
  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const handleBookingSubmit = () => {
    setShowBooking(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&h=600&fit=crop"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            WHAT WE OFFER
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium grooming services tailored to your style. From classic cuts to modern trends.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className={cn(
        'py-8 sticky top-16 md:top-20 z-30 border-b',
        theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-md border-gray-800' 
          : 'bg-white/95 backdrop-blur-md border-gray-100'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
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

      {/* Services Grid */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={cn(
                  'group rounded-3xl overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  {service.popular && (
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ POPULAR
                    </span>
                  )}

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-xl">{service.name}</h3>
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={service.icon} size={24} className="text-orange-500" />
                    </div>
                  </div>

                  <p className={cn('text-sm mb-4', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="clock" size={16} className="text-orange-500" />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {service.duration}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        KES {service.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowBooking(true)}
                    className="w-full py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Icon name="calendar" size={18} />
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-950' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className={cn(
              'p-8 rounded-3xl text-center',
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            )}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Icon name="check" size={32} className="text-green-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                No hidden fees. The price you see is the price you pay.
              </p>
            </div>

            <div className={cn(
              'p-8 rounded-3xl text-center',
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            )}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center">
                <Icon name="package" size={32} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Package Deals</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Combine services and save. Ask about our VIP packages.
              </p>
            </div>

            <div className={cn(
              'p-8 rounded-3xl text-center',
              theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
            )}>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <Icon name="heart" size={32} className="text-purple-500" />
              </div>
              <h3 className="font-bold text-xl mb-2">Loyalty Rewards</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Every 10th haircut is free. Ask about our loyalty program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={cn(
        'py-16',
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-4xl font-bold">
              Simple <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Booking</span> Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Choose Service', desc: 'Select from our range of premium services', icon: 'scissors' },
              { step: '02', title: 'Pick Time', desc: 'Choose your preferred date and time', icon: 'calendar' },
              { step: '03', title: 'Confirm', desc: 'Enter your details and confirm booking', icon: 'check' },
              { step: '04', title: 'Enjoy', desc: 'Sit back and enjoy the experience', icon: 'heart' },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className={cn(
                  'w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative',
                  'bg-gradient-to-br from-amber-500 to-orange-500'
                )}>
                  <Icon name={item.icon} size={32} className="text-white" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-900 text-orange-500 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {item.desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Book your appointment now and experience premium grooming.
          </p>
          <button
            onClick={() => setShowBooking(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-full hover:shadow-xl transition-all hover:scale-105"
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
