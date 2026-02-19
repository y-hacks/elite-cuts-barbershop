# 💈 Elite Cuts Premium Barbershop

<p align="center">
  <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80" alt="Elite Cuts Barbershop" width="100%" style="border-radius: 12px;" />
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Live Demo</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#installation">Installation</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#contributing">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-4.3-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" />
</p>

---

## 🎯 Overview

**Elite Cuts Premium Barbershop** is a modern, full-featured website designed for barbershops in Kenya. Built with React, TypeScript, and Tailwind CSS, this website offers an exceptional user experience with online booking, service showcases, blog content, and engaging conversation topics for clients.

### ✨ Key Highlights

- 🌗 **Light & Dark Theme** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 💰 **Kenyan Shilling Pricing** - All services priced in KES
- 📅 **Online Booking System** - Complete appointment scheduling
- 🗣️ **Barbershop Conversation Topics** - Real-time discussion ideas for clients
- 🎨 **Modern UI/UX** - Stunning gradients, animations, and professional design

---

## 🚀 Features

### 🏠 **Multi-Page Structure**

| Page | Description |
|------|-------------|
| **Home** | Hero section, featured services, team showcase, reviews, opening hours, map |
| **About** | Company story, values, timeline, team members |
| **Services** | 12+ services with category filtering and KES pricing |
| **Blog** | Hair care tips, trending styles, grooming advice |
| **News** | Latest updates, promotions, conversation starters |
| **Contact** | Booking form, contact info, FAQ, social links |

### 💈 **Services Offered**

- ✂️ Classic Haircut (KES 500)
- 🧔 Beard Trim & Shape (KES 400)
- 🔥 Hot Towel Shave (KES 800)
- 🎨 Hair Coloring (KES 2,500)
- 💨 Blow Dry & Style (KES 350)
- 🌀 Dreadlock Retwist (KES 1,500)
- 👶 Kids Haircut (KES 350)
- ⭐ Fade Haircut (KES 600)
- 💆 Head Massage (KES 600)
- ✨ Facial Treatment (KES 1,200)
- 🎭 Hair Tattoo Design (KES 800)
- 👑 VIP Full Package (KES 3,500)

### 🎨 **Design Features**

- 🌈 **Vibrant Color Scheme** - Premium orange/amber gradient theme
- 🎭 **Dark/Light Mode** - Toggle between themes
- ✨ **Smooth Animations** - Hover effects and transitions
- 📸 **High-Quality Images** - Professional Unsplash photography
- 🎯 **Modern Typography** - Clean, readable fonts
- 📐 **Responsive Grid** - Flexbox and CSS Grid layouts

### 🗣️ **Conversation Topics**

Engaging discussion categories for the barbershop:

- ⚽ **Sports** - Harambee Stars, Premier League, AFCON
- 🎬 **Entertainment** - Sauti Sol, Kenyan movies, TikTok trends
- 📱 **Technology** - M-Pesa, AI, Silicon Savannah
- 💼 **Business** - Side hustles, real estate, entrepreneurship
- 🌍 **Politics & Society** - Climate change, youth in politics
- 💬 **Lifestyle** - Dating, mental health, fitness culture

### 📱 **Additional Features**

- ⭐ **Client Reviews** - Testimonial system with ratings
- 🕐 **Opening Hours** - Weekly schedule with status
- 🗺️ **Google Maps** - Embedded location map
- 📲 **Social Media** - Facebook, Instagram, Twitter, TikTok, YouTube, WhatsApp
- 📰 **Blog & News** - Content management for updates
- ❓ **FAQ Section** - Common questions answered

---

## 🌐 Live Demo

**🚀 [View Live Demo](https://y-hacks.github.io/elite-cuts-barbershop/)**



---

## 📸 Screenshots

### Home Page
<p align="center">
  <img src="https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Home+Page+Screenshot" alt="Home Page" width="80%" />
</p>

### Services Page
<p align="center">
  <img src="https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Services+Page+Screenshot" alt="Services Page" width="80%" />
</p>

### Booking Form
<p align="center">
  <img src="https://via.placeholder.com/800x450/1a1a2e/ffffff?text=Booking+Form+Screenshot" alt="Booking Form" width="80%" />
</p>

### Dark Mode
<p align="center">
  <img src="https://via.placeholder.com/800x450/0f0f1a/ffffff?text=Dark+Mode+Screenshot" alt="Dark Mode" width="80%" />
</p>

---

## 🛠️ Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/y-hacks/elite-cuts-barbershop.git

# 2. Navigate to project folder
cd elite-cuts-barbershop

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Open in browser
# Visit: http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ Project Structure

```
elite-cuts-barbershop/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── public/
│   └── vite.svg                # Vite logo
├── src/
│   ├── components/
│   │   ├── BookingForm.tsx     # Appointment booking
│   │   ├── Button.tsx          # Reusable button
│   │   ├── Card.tsx            # Card component
│   │   ├── Icon.tsx            # SVG icons
│   │   ├── ReviewCard.tsx      # Review display
│   │   ├── ReviewForm.tsx      # Review submission
│   │   ├── ServiceCard.tsx     # Service display
│   │   └── SuccessModal.tsx    # Success modal
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/light theme provider
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── About.tsx           # About page
│   │   ├── Services.tsx        # Services page
│   │   ├── Blog.tsx            # Blog page
│   │   ├── News.tsx            # News & conversation topics
│   │   └── Contact.tsx         # Contact page
│   ├── styles/
│   │   └── theme.ts            # Theme configuration
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
└── README.md                   # This file
```

---

## 💻 Technologies

### Core Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with hooks |
| **TypeScript** | Type safety and better DX |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS** | Utility-first CSS framework |
| **React Router** | Client-side routing |
| **Lucide React** | Icon library |

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🎨 Customization

### Changing Colors

Edit `src/styles/theme.ts`:

```typescript
export const theme = {
  colors: {
    primary: '#f97316',    // Change primary color
    secondary: '#fbbf24',  // Change secondary color
    // ... other colors
  }
}
```

### Adding New Services

Edit the services array in `src/pages/Services.tsx`:

```typescript
{
  id: 13,
  name: 'New Service',
  price: 1000,
  duration: '45 min',
  category: 'haircut',
  description: 'Service description',
  image: 'image-url',
  popular: false
}
```

### Updating Business Info

Edit contact details in `src/pages/Contact.tsx`:

```typescript
const contactInfo = {
  phone: '+254 712 345 678',
  email: 'your@email.com',
  address: 'Your Address, Nairobi'
}
```

---

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub repository
2. Go to **Settings → Pages**
3. Select **GitHub Actions** as source
4. The workflow will auto-deploy on every push

### Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Contribution Guidelines

- Follow existing code style
- Write meaningful commit messages
- Update documentation for new features
- Test on mobile and desktop

---



---

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser/device info

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Elite Cuts Barbershop

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **Images** - [Unsplash](https://unsplash.com) photographers
- **Icons** - [Lucide](https://lucide.dev) icon library
- **Fonts** - System fonts and Tailwind defaults
- **Inspiration** - Modern barbershop designs worldwide

---

## 📞 Contact

**Elite Cuts Premium Barbershop**

- 📍 **Location**: Kimathi Street, Nairobi CBD, Kenya
- 📞 **Phone**: +254 712 345 678
- 📧 **Email**: info@elitecuts.co.ke
- 🌐 **Website**: [elitecuts.co.ke](https://elitecuts.co.ke)



---

<p align="center">
  Made with 💈 and ☕ in Nairobi, Kenya
</p>

<p align="center">
  <a href="https://github.com/y-hacks/elite-cuts-barbershop/stargazer>⭐ Star this repo</a> if you found it helpful!
</p>
