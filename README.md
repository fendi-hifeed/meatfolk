# Meatfolk - Landing Page

Landing page untuk Meatfolk - Daging berkualitas dari peternak lokal Indonesia.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Landing page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navbar with mobile menu
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── WhyUs.tsx       # Features section
│   ├── Products.tsx    # Products & partnership
│   ├── Impact.tsx      # Impact section
│   ├── Contact.tsx     # Contact & retailers
│   ├── Footer.tsx      # Footer
│   └── ui/             # Reusable UI components
├── lib/
│   └── utils.ts        # Utility functions
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## Design System

Berdasarkan design system "Artisanal Prime" dengan:

- **Primary:** #98001b (Bold Red)
- **Secondary:** #8c4f00 (Vibrant Orange)
- **Typography:** Hanken Grotesk, Manrope, JetBrains Mono

## Features

- Fully responsive (mobile-first)
- Sticky navigation with hamburger menu
- Smooth scroll navigation
- Next.js Image optimization
- SEO optimized with metadata
- Dark mode ready (via Tailwind class)
