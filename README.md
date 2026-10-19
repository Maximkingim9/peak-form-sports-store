# Peak Form – Sports Gear Store 🏃‍♂️

A modern e-commerce front end for a sports equipment shop covering running, fitness, team sports and outdoor gear. Customers can browse and filter products, view product details, manage a shopping cart and go through a complete checkout flow.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

> **Note:** This is a portfolio/demo project. Products, prices and customer reviews are sample data, not a real shop.

🔗 **Live demo:** [add your Vercel/Netlify link here]

## Screenshots

<!-- Add screenshots to a folder such as docs/ and reference them here -->
| Home | Shop | Product detail |
|------|------|----------------|
| ![Home](docs/home.png) | ![Shop](docs/shop.png) | ![Product](docs/product.png) |

## Features

**Shopping experience**
- Home page with hero section, category highlights, best-seller / bundle / sale carousels, customer reviews and a training journal section
- Shop page with category filter (also via URL, e.g. `/shop?category=Running`), price range filter and sorting
- Product detail page with size and option selection, quantity picker and sharing

**Cart & checkout**
- Shopping cart managed with React Context
- Full **Cart → Checkout → Order complete** flow
- Coupon code support (`WELCOME10` gives 10% off)

**Accounts**
- Login and registration with a local demo authentication (browser storage)

## Tech Stack

| Area        | Technologies |
|-------------|--------------|
| Framework   | React 19, TypeScript |
| Build tool  | Vite |
| Styling     | Tailwind CSS 3, Bootstrap Icons |
| Routing     | React Router |
| State       | React Context API (cart, auth) |
| UI          | Swiper (carousels) |
| Data        | Local JSON data, optional WordPress API via Axios |
| Code quality| ESLint |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/Maximkingim9/peak-form-sports-store.git
cd peak-form-sports-store
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

### Available scripts

| Command         | Description                               |
|-----------------|-------------------------------------------|
| `npm run dev`   | Start the development server              |
| `npm run build` | Type-check and build for production       |
| `npm run lint`  | Run ESLint                                |

## Project Structure

```
src/
├── assets/            products.json, items.json (featured carousel), testimonials.json
├── Components/Home/   Home page sections (ProductGrid, FilterSlider, Slider, HowToOrder, ...)
├── Context/           CartContext, AuthContext
├── Layouts/           MainLayout, Container
├── Pages/             Home, Shop, ProductDetail, Cart, Checkout, OrderComplete, Login, Register
└── Services/          products.ts (product data), wordpress.tsx (optional CMS)
public/                hero-sport.svg, logo.svg, favicon.svg
```

## Product Data

Products are stored in `src/assets/products.json`. Each product has:

- `category` – Running, Fitness, Team Sports or Outdoor
- `type` – Footwear, Apparel, Equipment or Accessories
- `sizes` and `variant` (colour)
- a Bootstrap icon and a CSS gradient (`tone`) used as a placeholder image

Add an `images` array to a product to show real product photos instead of the placeholder.

## Possible Improvements

- Connect a real backend for products, orders and authentication
- Payment integration (e.g. Stripe test mode)
- Unit and end-to-end tests

## Author

**[Your Name]** – [GitHub](https://github.com/Maximkingim9) · [LinkedIn](https://www.linkedin.com/in/your-profile)
