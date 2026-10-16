import { useState } from "react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";
import type { SportProduct } from "./types";
import { useCart } from "../../../Context/CartContext";

type ProductCardProps = {
  product: SportProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <article className="min-w-0">
      <Link to={`/shop/${product.slug || product.id}`} aria-label={`View ${product.name}`} className="block">
        <ProductVisual product={product} />
      </Link>

      <div className="px-0.5 pt-4 text-center">
        <p className="mb-1 text-[8px] uppercase tracking-wide text-[#a4a7a5]">{product.category}</p>
        <h3 className="mx-auto h-9 max-w-[190px] text-[11px] font-medium leading-[1.45] text-[#20242c]">{product.name}</h3>
        <p className="mt-1 text-[9px] text-[#6f746f]">{product.variant}</p>

        <div className="mt-2 flex justify-center gap-1 text-[9px]">
          <span className="text-[#f2bc1b]">★</span>
          <span>{product.rating}/5</span>
          <span className="text-[#b0b2b1]">|</span>
          <span className="text-[#939793]">{product.reviews} Reviews</span>
        </div>

        <div className="mt-2 flex justify-center gap-2 text-[8px] text-[#7d827e]">
          <span>{product.type}</span>
          <span>{product.sizes.length} {product.sizes.length === 1 ? "option" : "options"}</span>
        </div>

        <div className="mt-3 flex items-baseline justify-center gap-1">
          <span className="text-[11px] font-semibold text-[#e25d42]">€{product.price.toFixed(2)}</span>
          {product.oldPrice && <span className="text-[8px] text-[#a6a9a7] line-through">€{product.oldPrice.toFixed(2)}</span>}
        </div>

        <div className="my-3 flex flex-wrap justify-center gap-1">
          {product.sizes.map((option) => <button key={option} type="button" onClick={() => setSize(option)} aria-pressed={size === option} className={`rounded-sm border px-1.5 py-1 text-[8px] transition ${size === option ? "border-[#14284a] text-[#14284a]" : "border-[#e7e8e6] text-[#626762]"}`}>{option}</button>)}
        </div>

        <button type="button" onClick={() => addItem({ id: `product-${product.id}-${size}`, name: product.sizes.length > 1 ? `${product.name} (${size})` : product.name, category: product.category, price: product.price, tone: product.tone })} disabled={!product.available} className="rounded-full bg-[#ff5a1f] px-5 py-1.5 text-[9px] font-semibold text-white transition hover:bg-[#e04a12] disabled:cursor-not-allowed disabled:bg-[#b4b7b4]">
          {product.available ? "Add to Cart" : "Sold Out"}
        </button>
      </div>
    </article>
  );
}
