export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Trending Hairstyles for Men in 2024',
    excerpt: 'Discover the hottest hair trends that are dominating barbershops across Kenya and the world.',
    content: `The world of men's hairstyles is constantly evolving, and 2024 brings exciting new trends that blend classic sophistication with modern edge.

**1. The Textured Crop**
This low-maintenance style features a textured top with a fade on the sides. Perfect for the Kenyan weather and easy to style.

**2. The Modern Pompadour**
A contemporary take on the classic, with more volume and a natural finish. Great for formal occasions.

**3. The Buzz Cut Fade**
Clean, sharp, and professional. The buzz cut with a skin fade remains a top choice for busy professionals.

**4. Natural Curls**
Embracing natural texture is huge this year. Let your curls shine with proper maintenance and products.

**5. The Mullet Comeback**
Yes, it's back! But modernized with clean sides and a subtle length at the back.

Visit Elite Cuts to get any of these trending styles from our expert barbers!`,
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=500&fit=crop',
    author: 'James Mwangi',
    date: 'December 15, 2024',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'The Amazing Benefits of Scalp Massage',
    excerpt: 'Learn how regular scalp massages can improve hair health, reduce stress, and boost your overall wellness.',
    content: `A scalp massage isn't just a luxurious add-on to your haircut – it's a powerful wellness treatment with numerous benefits.

**Promotes Hair Growth**
Regular scalp massages increase blood circulation to hair follicles, delivering essential nutrients that promote healthier, stronger hair growth.

**Reduces Stress & Tension**
The scalp contains numerous pressure points. Massaging these points releases tension, reduces stress hormones, and promotes relaxation.

**Improves Sleep Quality**
A relaxing scalp massage before bed can help you fall asleep faster and enjoy deeper, more restful sleep.

**Prevents Headaches**
Regular massages can reduce the frequency and intensity of tension headaches by releasing muscle tightness.

**Enhances Product Absorption**
Massaging helps your hair products penetrate deeper, making them more effective.

Book a scalp massage add-on with your next haircut at Elite Cuts!`,
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=500&fit=crop',
    author: 'Kevin Ochieng',
    date: 'December 12, 2024',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'How to Maintain Your Dreadlocks at Home',
    excerpt: 'Essential tips and tricks for keeping your locs healthy, neat, and looking fresh between salon visits.',
    content: `Dreadlocks are more than just a hairstyle – they're a journey. Here's how to keep them looking their best between retwist appointments.

**Regular Washing**
Contrary to popular belief, locs need regular washing. Use a residue-free shampoo every 1-2 weeks.

**Moisturize Daily**
Keep your locs hydrated with a light oil or loc spray. Focus on the scalp and the length of your locs.

**Night Protection**
Sleep with a satin or silk bonnet or pillowcase to prevent frizz and breakage.

**Avoid Over-Manipulation**
Resist the urge to constantly touch, twist, or pull at your locs. This can cause thinning and damage.

**Regular Maintenance**
Visit your loctician every 4-6 weeks for professional retwisting and maintenance.

**Stay Hydrated**
Drink plenty of water – healthy hair starts from within!

Book your loc maintenance appointment at Elite Cuts today!`,
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=500&fit=crop',
    author: 'Brian Kamau',
    date: 'December 10, 2024',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 4,
    title: 'The Art of the Perfect Beard: A Complete Guide',
    excerpt: 'Everything you need to know about growing, styling, and maintaining the perfect beard.',
    content: `Growing a great beard is an art form. Here's your complete guide to beard excellence.

**Growing Phase**
Be patient! A full beard takes 4-6 weeks to grow. Resist trimming during this phase.

**Finding Your Style**
Consider your face shape when choosing a beard style. Round faces suit longer beards, while square faces look great with shorter styles.

**Daily Maintenance**
- Wash your beard 2-3 times a week
- Apply beard oil daily
- Brush or comb to train hair direction
- Trim stray hairs regularly

**Professional Shaping**
Visit your barber every 2-3 weeks for professional shaping and line-ups.

**Common Mistakes to Avoid**
- Over-trimming
- Neglecting the neckline
- Using regular shampoo
- Skipping beard oil

Come to Elite Cuts for expert beard styling and maintenance!`,
    category: 'Grooming',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=500&fit=crop',
    author: 'James Mwangi',
    date: 'December 8, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Choosing the Right Haircut for Your Face Shape',
    excerpt: 'A comprehensive guide to finding the most flattering hairstyle based on your unique face shape.',
    content: `The key to a great haircut is understanding your face shape. Here's how to find your perfect match.

**Oval Face**
Lucky you! Almost any style works. Try textured crops, pompadours, or classic side parts.

**Round Face**
Add height and angles. Go for styles with volume on top and shorter sides. Avoid rounded styles.

**Square Face**
Soften angles with textured, messy styles. Side parts and longer tops work great.

**Oblong Face**
Avoid adding height. Keep sides fuller and avoid very short cuts that elongate the face.

**Heart Face**
Balance a wider forehead with medium-length styles. Avoid too much volume on top.

**Diamond Face**
Similar to oval, most styles work. Play up your cheekbones with texturized cuts.

Not sure about your face shape? Our barbers at Elite Cuts will help you find the perfect style!`,
    category: 'Style Guide',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=500&fit=crop',
    author: 'Dennis Wafula',
    date: 'December 5, 2024',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Hair Color Trends: Bold Moves for the Modern Man',
    excerpt: 'From subtle highlights to bold transformations, explore the latest in men\'s hair coloring.',
    content: `Hair color isn't just for women anymore. More men are embracing color to express their style.

**Trending Colors for 2024**

**Platinum Blonde**
A bold statement that requires commitment but delivers maximum impact.

**Subtle Highlights**
Natural-looking dimension that enhances your base color without dramatic change.

**Silver/Grey**
Embracing grey or going intentionally silver is sophisticated and trendy.

**Warm Browns**
Adding warmth to natural color for a sun-kissed look.

**Bold Colors**
Blues, greens, and purples for the adventurous.

**Important Considerations**
- Professional coloring is worth the investment
- Colored hair needs extra care
- Consider your workplace and lifestyle
- Start subtle if you're new to color

Ready to make a change? Book a color consultation at Elite Cuts!`,
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1560869713-bf09b935ccc9?w=800&h=500&fit=crop',
    author: 'Kevin Ochieng',
    date: 'December 1, 2024',
    readTime: '5 min read',
    featured: false,
  },
];

export const newsItems = [
  {
    id: 1,
    title: 'Elite Cuts Wins Best Barbershop in Nairobi 2024',
    excerpt: 'We are thrilled to announce that Elite Cuts has been voted the best barbershop in Nairobi for the third consecutive year!',
    date: 'December 14, 2024',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'New Luxury Lounge Opening in Westlands',
    excerpt: 'Exciting news! We\'re expanding with a new premium location in Westlands, opening January 2025.',
    date: 'December 10, 2024',
    category: 'Expansion',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Holiday Special: 20% Off All Services',
    excerpt: 'Celebrate the festive season with our exclusive holiday discount on all grooming services.',
    date: 'December 5, 2024',
    category: 'Promotions',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Partnership with Kenya Fashion Week',
    excerpt: 'Elite Cuts is proud to be the official grooming partner for Kenya Fashion Week 2025.',
    date: 'November 28, 2024',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Introducing Premium Beard Oil Collection',
    excerpt: 'We\'ve launched our own line of premium beard care products, made with natural Kenyan ingredients.',
    date: 'November 20, 2024',
    category: 'Products',
    image: 'https://images.unsplash.com/photo-1621607510248-b1c04b4ea2c8?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Community Outreach: Free Haircuts for Students',
    excerpt: 'Giving back to our community with free back-to-school haircuts for students in need.',
    date: 'November 15, 2024',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop',
  },
];
