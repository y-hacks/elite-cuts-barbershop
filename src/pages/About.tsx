import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/Icon';
import { teamMembers } from '@/data/services';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/utils/cn';

export const About: React.FC = () => {
  const { theme } = useTheme();

  const milestones = [
    { year: '2019', title: 'Founded', desc: 'Elite Cuts opened its doors in Nairobi CBD' },
    { year: '2020', title: 'Expanded Team', desc: 'Grew to 4 expert barbers' },
    { year: '2022', title: 'Award Winner', desc: 'Voted Best Barbershop in Nairobi' },
    { year: '2023', title: '2000+ Clients', desc: 'Reached milestone of satisfied customers' },
    { year: '2024', title: 'Premium Upgrade', desc: 'Renovated with luxury amenities' },
  ];

  const values = [
    { icon: 'award', title: 'Excellence', desc: 'We strive for perfection in every cut, every time.' },
    { icon: 'heart', title: 'Customer Care', desc: 'Your satisfaction and comfort are our top priorities.' },
    { icon: 'sparkle', title: 'Innovation', desc: 'Always learning and adopting the latest techniques.' },
    { icon: 'user', title: 'Community', desc: 'Building lasting relationships with our clients.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=600&fit=crop"
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            OUR STORY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Elite Cuts</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Nairobi's premier destination for exceptional grooming and styling since 2019.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
                WHO WE ARE
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Crafting <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Confidence</span> Since 2019
              </h2>
              <div className={cn('space-y-4 text-lg', theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}>
                <p>
                  Elite Cuts was founded with a simple mission: to provide Nairobi's gentlemen with a premium grooming experience that goes beyond just a haircut.
                </p>
                <p>
                  What started as a small barbershop in Nairobi CBD has grown into the city's most trusted destination for men's grooming. Our team of expert barbers brings together decades of combined experience and a passion for their craft.
                </p>
                <p>
                  We believe that looking good is more than just appearance—it's about confidence, self-expression, and taking time for yourself. Every client who walks through our doors is treated like family.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">5+</p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Years</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">4</p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Expert Barbers</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">2K+</p>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=700&fit=crop"
                alt="Our Barbershop"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-amber-500 to-orange-500 text-white p-8 rounded-3xl shadow-xl">
                <p className="text-4xl font-bold">5★</p>
                <p className="text-sm opacity-90">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              OUR VALUES
            </span>
            <h2 className="text-4xl font-bold">
              What We <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className={cn(
                  'p-8 rounded-3xl text-center transition-all hover:shadow-xl hover:-translate-y-2',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
                  <Icon name={value.icon} size={32} className="text-orange-500" />
                </div>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      )}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl font-bold">
              Milestones & <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Achievements</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-red-500" />
            
            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <div
                  key={i}
                  className={cn(
                    'relative flex items-center gap-8',
                    i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  )}
                >
                  <div className={cn('w-1/2', i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8')}>
                    <div className={cn(
                      'inline-block p-6 rounded-2xl',
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
                    )}>
                      <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                      <h3 className="font-bold text-lg mt-2">{milestone.title}</h3>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-4 border-white dark:border-gray-900" />
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={cn(
        'py-24',
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full text-sm font-semibold mb-4">
              THE TEAM
            </span>
            <h2 className="text-4xl font-bold">
              Meet Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Expert</span> Barbers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={cn(
                  'group overflow-hidden rounded-3xl transition-all hover:shadow-2xl',
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                )}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-orange-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="clock" size={16} className="text-orange-500" />
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      {member.experience} experience
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-orange-500 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Elite Difference?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Visit us today and see why we're Nairobi's favorite barbershop.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-600 font-bold text-lg rounded-full hover:shadow-xl transition-all hover:scale-105"
          >
            <Icon name="calendar" size={24} />
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};
