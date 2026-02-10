export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  icon: string;
  popular: boolean;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: 'Classic Haircut',
    description: 'Traditional barber cut with precision styling, hot towel finish, and expert consultation',
    price: 500,
    duration: '30 min',
    icon: 'scissors',
    popular: true,
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop',
    category: 'Haircuts',
  },
  {
    id: 2,
    name: 'Beard Trim & Shape',
    description: 'Expert beard grooming, shaping, and conditioning with premium oils',
    price: 400,
    duration: '25 min',
    icon: 'beard',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop',
    category: 'Beard',
  },
  {
    id: 3,
    name: 'Hot Towel Shave',
    description: 'Luxurious straight razor shave with steaming hot towels and soothing balms',
    price: 800,
    duration: '45 min',
    icon: 'shave',
    popular: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop',
    category: 'Shaving',
  },
  {
    id: 4,
    name: 'Hair Coloring',
    description: 'Professional hair dye, highlights, and color treatment with ammonia-free products',
    price: 2500,
    duration: '90 min',
    icon: 'color',
    popular: false,
    image: 'https://images.unsplash.com/photo-1560869713-bf09b935ccc9?w=400&h=300&fit=crop',
    category: 'Coloring',
  },
  {
    id: 5,
    name: 'Blow Dry & Style',
    description: 'Professional blow dry and heat styling for any occasion',
    price: 350,
    duration: '25 min',
    icon: 'blowdry',
    popular: false,
    image: 'https://images.unsplash.com/photo-1634302086887-13b5281d0a38?w=400&h=300&fit=crop',
    category: 'Styling',
  },
  {
    id: 6,
    name: 'Dreadlock Retwist',
    description: 'Expert dreadlock maintenance, retwisting, and palm rolling technique',
    price: 1500,
    duration: '60 min',
    icon: 'dreadlock',
    popular: true,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=300&fit=crop',
    category: 'Specialty',
  },
  {
    id: 7,
    name: 'Kids Haircut',
    description: 'Fun and gentle haircut experience for children under 12 years',
    price: 350,
    duration: '25 min',
    icon: 'kid',
    popular: false,
    image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=300&fit=crop',
    category: 'Haircuts',
  },
  {
    id: 8,
    name: 'Fade Haircut',
    description: 'Precision fade with sharp lines and clean blending techniques',
    price: 600,
    duration: '35 min',
    icon: 'scissors',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop',
    category: 'Haircuts',
  },
  {
    id: 9,
    name: 'Head Massage',
    description: 'Relaxing scalp massage with essential oils to relieve stress and tension',
    price: 600,
    duration: '30 min',
    icon: 'massage',
    popular: false,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
    category: 'Wellness',
  },
  {
    id: 10,
    name: 'Facial Treatment',
    description: 'Deep cleansing facial with exfoliation, mask, and moisturizing',
    price: 1200,
    duration: '45 min',
    icon: 'facial',
    popular: false,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
    category: 'Wellness',
  },
  {
    id: 11,
    name: 'Hair Tattoo Design',
    description: 'Custom hair art designs and patterns carved with precision',
    price: 800,
    duration: '40 min',
    icon: 'design',
    popular: false,
    image: 'https://images.unsplash.com/photo-1599351430330-e tried83be3d?w=400&h=300&fit=crop',
    category: 'Specialty',
  },
  {
    id: 12,
    name: 'VIP Full Package',
    description: 'Complete grooming: Haircut + Beard + Shave + Facial + Massage',
    price: 3500,
    duration: '120 min',
    icon: 'package',
    popular: true,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop',
    category: 'Packages',
  },
];

export const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
  '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

export const openingHours = [
  { day: 'Monday', hours: '9:00 AM - 8:00 PM', isOpen: true },
  { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
  { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
  { day: 'Thursday', hours: '9:00 AM - 8:00 PM', isOpen: true },
  { day: 'Friday', hours: '9:00 AM - 9:00 PM', isOpen: true },
  { day: 'Saturday', hours: '8:00 AM - 9:00 PM', isOpen: true },
  { day: 'Sunday', hours: 'Closed', isOpen: false },
];

export const teamMembers = [
  {
    id: 1,
    name: 'James Mwangi',
    role: 'Master Barber & Owner',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    specialties: ['Classic Cuts', 'Fades', 'Beard Styling'],
  },
  {
    id: 2,
    name: 'Kevin Ochieng',
    role: 'Senior Barber',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    specialties: ['Modern Styles', 'Hair Coloring', 'Designs'],
  },
  {
    id: 3,
    name: 'Brian Kamau',
    role: 'Barber & Stylist',
    experience: '7+ years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
    specialties: ['Dreadlocks', 'Braids', 'Natural Hair'],
  },
  {
    id: 4,
    name: 'Dennis Wafula',
    role: 'Junior Barber',
    experience: '3+ years',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop',
    specialties: ['Fades', 'Kids Cuts', 'Beard Trims'],
  },
];
