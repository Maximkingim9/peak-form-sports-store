export type ProductCategory =
  | "Running"
  | "Fitness"
  | "Team Sports"
  | "Outdoor";

export type ProductType = "Footwear" | "Apparel" | "Equipment" | "Accessories";

export type SportProduct = {
  id: number;
  name: string;
  category: ProductCategory;
  type: ProductType;
  variant: string;
  icon: string;
  rating: number;
  reviews: number;
  sizes: string[];
  price: number;
  oldPrice?: number;
  badge?: string;
  /** CSS background used for the placeholder visual, e.g. a linear-gradient. */
  tone: string;
  available: boolean;
  slug?: string;
  description?: string;
  images?: string[];
};

export type ProductFilter = "All" | ProductCategory | "On Sale";
