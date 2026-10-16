import fallbackProducts from "../assets/products.json";
import type { SportProduct } from "../Components/Home/ProductGrid/types";

const products = fallbackProducts as SportProduct[];

// Keep the shop self-contained until a reachable product API is configured.
export async function getProducts(): Promise<SportProduct[]> {
  return products;
}

export async function getProduct(productId: string): Promise<SportProduct | undefined> {
  return products.find((product) => product.slug === productId || String(product.id) === productId);
}
