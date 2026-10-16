import { useMemo, useState } from "react";
import productsData from "../../../assets/products.json";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import type { ProductFilter, SportProduct } from "./types";

const products = productsData as SportProduct[];
const filters: ProductFilter[] = ["All", "Running", "Fitness", "Team Sports", "Outdoor", "On Sale"];

export default function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<ProductFilter>("All");

  const visibleProducts = useMemo(
    () => products.filter((product) => activeFilter === "All" || (activeFilter === "On Sale" ? Boolean(product.oldPrice) : product.category === activeFilter)),
    [activeFilter],
  );

  return (
    <section id="product-grid" className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8501a]">Fresh drops</p>
      <h2 className="mt-3 text-[30px] font-black uppercase tracking-[-0.04em] text-[#1b1f28] sm:text-[38px]">Recently added</h2>
      <ProductFilters activeFilter={activeFilter} filters={filters} onFilterChange={setActiveFilter} />

      <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      {visibleProducts.length === 0 && <p className="py-12 text-center text-sm text-[#777c77]">No products match this filter.</p>}
    </section>
  );
}
