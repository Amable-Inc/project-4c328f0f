# GoalGear - Soccer Ball Store Landing Page

## Overview
A modern, fully responsive landing page for a soccer ball e-commerce store built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

### 🎨 Design Elements
- **Hero Section**: Eye-catching header with animated soccer ball emoji, key statistics, and call-to-action buttons
- **Navigation**: Sticky header with smooth navigation and shopping cart
- **Product Grid**: 6 featured soccer balls with cards displaying:
  - Product images (emoji placeholders)
  - Star ratings
  - Prices
  - Badges (Best Seller, Popular, New, Premium)
  - Add to Cart buttons
- **Features Section**: 4 key benefits with icons:
  - Free Shipping
  - 2-Year Warranty
  - Official Products
  - 30-Day Returns
- **Call-to-Action Section**: Bold gradient section encouraging purchases
- **Footer**: Comprehensive footer with links, newsletter signup, and company info

### 🎯 Technologies Used
- **Next.js 14**: App Router with TypeScript
- **Tailwind CSS**: Utility-first styling with custom gradients
- **shadcn/ui Components**:
  - Button
  - Card
  - Badge
- **Lucide React Icons**: For professional iconography
- **Responsive Design**: Mobile-first approach

### 🚀 Running the Project

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the landing page.

## File Structure

```
/home/user/project/
├── app/
│   ├── page.tsx          # Main landing page (client component)
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Global styles
├── components/
│   └── ui/
│       ├── button.tsx    # Button component
│       ├── card.tsx      # Card components
│       └── badge.tsx     # Badge component
└── lib/
    └── utils.ts          # Utility functions
```

## Key Sections

### 1. Hero Section
- Large headline and subheadline
- Two CTA buttons
- Statistics showcase (10K+ customers, 50+ models, 4.9 rating)
- Animated soccer ball graphic

### 2. Features
- Four feature cards highlighting store benefits
- Icons from Lucide React
- Hover effects

### 3. Products
- Grid layout (responsive: 1, 2, or 3 columns)
- 6 product cards with:
  - Product name and description
  - Price display
  - Star ratings
  - Optional badges
  - Add to Cart functionality

### 4. Footer
- Multi-column layout with:
  - Company info
  - Shop links
  - Support links
  - Newsletter subscription
- Copyright notice

## Customization

### Colors
The landing page uses a green color scheme that can be easily customized in the Tailwind classes:
- Primary: `green-600`, `green-700`
- Background gradients: `from-green-50 to-white`
- Accents: Various shades of green

### Products
Update the `products` array in `app/page.tsx` to add/modify products:
```typescript
const products = [
  {
    id: 1,
    name: 'Product Name',
    price: 99.99,
    image: '⚽', // Replace with actual images
    rating: 5,
    description: 'Product description',
    badge: 'Best Seller', // or null
  },
  // ...more products
];
```

### Images
Currently using emoji placeholders (⚽). To use real images:
1. Add images to `/public/images/`
2. Update the product image property to use Next.js Image component:
```tsx
import Image from 'next/image';
<Image src="/images/ball.jpg" alt={product.name} width={300} height={300} />
```

## Performance Features
- Client-side rendering for interactive components
- Optimized with Next.js 14 App Router
- Tailwind CSS for minimal CSS bundle
- Semantic HTML for SEO

## Future Enhancements
- [ ] Add actual product images
- [ ] Implement shopping cart functionality
- [ ] Add product detail pages
- [ ] Integrate payment processing
- [ ] Add product filtering/sorting
- [ ] Implement user authentication
- [ ] Add reviews and testimonials section
- [ ] Integrate with a CMS or database

## License
This is a demo project for educational purposes.
