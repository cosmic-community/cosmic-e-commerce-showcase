# 🛍️ Cosmic E-Commerce Showcase

![App Preview](https://imgix.cosmicjs.com/69539050-9ec7-11f0-8f3b-cde45452e1fc-photo-1505740420928-5e560c06d30e-1759323973593.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, fully-responsive e-commerce showcase platform that demonstrates product catalogs, collection browsing, and customer reviews. Built with Next.js 15 and powered by Cosmic CMS for seamless content management.

## ✨ Features

- 📦 **Complete Product Catalog** - Browse all products with rich imagery and details
- 🏪 **Collection Organization** - Filter products by Electronics, Clothing, and Home & Garden
- ⭐ **Customer Reviews** - Display authentic feedback with star ratings
- 🖼️ **Product Image Galleries** - Multiple product images with optimized loading
- 💰 **Dynamic Pricing** - Real-time price display and stock availability
- 📱 **Responsive Design** - Perfect experience on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, professional design with smooth interactions
- 🚀 **Fast Performance** - Optimized images and efficient data fetching

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68dd26d871f3904a2a9413da&clone_repository=68dd284771f3904a2a941409)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Based on the content model I created for 'Design a content model for an e-commerce store with products, collections, and customer reviews', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official SDK for API integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository:
```bash
git clone <your-repo-url>
cd cosmic-ecommerce-showcase
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from '@/lib/cosmic'

// Get all products with collections
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const products = response.objects
```

### Fetching Product Reviews

```typescript
// Get reviews for a specific product
const response = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.product': productId
  })
  .props(['id', 'title', 'metadata'])
  .depth(1)

const reviews = response.objects
```

### Fetching Collections

```typescript
// Get all collections
const response = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])

const collections = response.objects
```

## 🌐 Cosmic CMS Integration

This application integrates with Cosmic CMS to manage:

- **Products**: Product catalog with descriptions, pricing, images, and stock levels
- **Collections**: Product categories for organized browsing
- **Reviews**: Customer testimonials with ratings and verification status

All content is fetched dynamically using the Cosmic SDK with proper error handling and loading states.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add environment variables in Netlify dashboard
4. Set build command: `bun run build`
5. Set publish directory: `.next`
6. Deploy!

## 📝 Environment Variables

Required environment variables:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key (for future CRUD operations)

## 🎨 Customization

- Modify color schemes in `tailwind.config.js`
- Update typography in `app/globals.css`
- Customize components in the `components` directory
- Adjust content fetching logic in `lib/cosmic.ts`

<!-- README_END -->