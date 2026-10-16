# Peak Form – Sports Gear Store

A modern e-commerce front end for a sports equipment shop: running, fitness, team sports and outdoor gear. Built with React, TypeScript, Vite and Tailwind CSS.

> Demo project. Products, prices and customer reviews are sample data, not a real shop.

## Features

- **Home page** with hero, category highlights, best-seller / bundle / sale carousel, customer reviews, product grid with sport filters and a training journal section
- **Shop page** with category filter (also via `/shop?category=Running`), price range and sorting
- **Product detail page** with size / option selection, quantity and sharing
- **Cart → Checkout → Order complete** flow with coupon support (`WELCOME10` gives 10% off)
- **Login / Register** with a local (browser storage) demo auth

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 3 (+ Bootstrap Icons)
- React Router
- Swiper (carousels)
- Axios (WordPress API service, optional)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check and build for production
npm run lint     # run ESLint
```

## Project structure

```
src/
  assets/            products.json, items.json (featured carousel), testimonials.json
  Components/Home/   home page sections (ProductGrid, FilterSlider, Slider, HowToOrder, ...)
  Context/           CartContext, AuthContext
  Layouts/           MainLayout, Container
  Pages/             Home, Shop, ProductDetail, Cart, Checkout, OrderComplete, Login, Register
  Services/          products.ts (product data), wordpress.tsx (optional CMS)
public/              hero-sport.svg, logo.svg, favicon.svg
```

## Product data

Products live in `src/assets/products.json`. Each product has a `category` (Running, Fitness, Team Sports, Outdoor), a `type` (Footwear, Apparel, Equipment, Accessories), `sizes`, a `variant` (colour) and a Bootstrap icon plus a CSS gradient (`tone`) used as a placeholder image. Add an `images` array to show real product photos instead.
