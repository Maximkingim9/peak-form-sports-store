import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../Services/products";
import ProductVisual from "../Components/Home/ProductGrid/ProductVisual";
import type { SportProduct } from "../Components/Home/ProductGrid/types";
import { useCart } from "../Context/CartContext";

const categories = ["All products", "Running", "Fitness", "Team Sports", "Outdoor", "On sale"];
const MIN_PRICE = 20;
const MAX_PRICE = 150;
type SortOption = "latest" | "price-low" | "price-high" | "rating";

function Shop() {
  // The selected category lives in the URL (?category=Running) so header links can open a filtered shop.
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const category = requestedCategory && categories.includes(requestedCategory) ? requestedCategory : "All products";
  const setCategory = (value: string) => setSearchParams(value === "All products" ? {} : { category: value });
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sort, setSort] = useState<SortOption>("latest");
  const [products, setProducts] = useState<SportProduct[]>([]);
  useEffect(() => { void getProducts().then(setProducts); }, []);
  const visibleProducts = useMemo(() => products.filter((product) => (category === "All products" || (category === "On sale" ? Boolean(product.oldPrice) : product.category === category)) && product.price <= maxPrice).sort((a, b) => sort === "price-low" ? a.price - b.price : sort === "price-high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : a.id - b.id), [products, category, maxPrice, sort]);

  return <div className="bg-white">
    <section className="border-b border-[#edf0ed] bg-[#f2f5f9]"><div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-[#e1e8e3] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">{[["bi-truck", "Reliable Shipping", "Fast, tracked delivery"], ["bi-shield-check", "You're Safe With Us", "Secure checkout"], ["bi-arrow-repeat", "30-Day Returns", "Free size exchanges"]].map(([icon, title, subtitle]) => <div className="flex items-center gap-3 py-4 sm:justify-center" key={title}><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#e8501a] shadow-sm"><i className={`bi ${icon}`} /></span><div><p className="text-xs font-bold text-[#20242c]">{title}</p><p className="text-[10px] text-[#858a86]">{subtitle}</p></div></div>)}</div></section>
    <div className="mx-auto flex max-w-[1240px] flex-col px-5 py-10 sm:px-8 lg:flex-row lg:gap-8 lg:py-14">
      <aside className="shrink-0 border-b border-[#edf0ed] pb-8 lg:w-[210px] lg:border-b-0 lg:border-r lg:pr-7">
        <div className="flex items-center justify-between"><h1 className="text-sm font-bold text-[#1f2522]">Filters</h1><button className="text-[10px] font-medium text-[#ff5a1f]" onClick={() => { setCategory("All products"); setMaxPrice(MAX_PRICE); }}>Clear all</button></div>
        <FilterTitle>Product category</FilterTitle><div className="space-y-3">{categories.map((item) => <label className="flex cursor-pointer items-center gap-2 text-[11px] text-[#666d68]" key={item}><input className="h-3 w-3 accent-[#ff5a1f]" type="radio" name="category" checked={category === item} onChange={() => setCategory(item)} /><span>{item}</span><span className="ml-auto text-[#a3a8a4]">{item === "All products" ? products.length : item === "On sale" ? products.filter((product) => product.oldPrice).length : products.filter((product) => product.category === item).length}</span></label>)}</div>
        <FilterTitle>Filter by price</FilterTitle><input className="h-1 w-full cursor-pointer appearance-none rounded-full bg-[#cbd4cd] accent-[#ff5a1f]" type="range" min={MIN_PRICE} max={MAX_PRICE} step="5" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} /><div className="mt-3 flex items-center justify-between text-[10px] text-[#747a76]"><span>€{MIN_PRICE}.00</span><span className="rounded bg-[#f2f5f9] px-2 py-1 font-medium text-[#303632]">Up to €{maxPrice}.00</span></div>
        <FilterTitle>Order by</FilterTitle><div className="space-y-3">{[["Latest", "latest"], ["Price: Low to High", "price-low"], ["Price: High to Low", "price-high"], ["Average Rating", "rating"]].map(([label, value]) => <label key={value} className="flex cursor-pointer items-center gap-2 text-[11px] text-[#666d68]"><input className="h-3 w-3 accent-[#ff5a1f]" type="radio" name="sidebar-sort" checked={sort === value} onChange={() => setSort(value as SortOption)} />{label}</label>)}</div>
      </aside>
      <section className="min-w-0 flex-1 pt-8 lg:pt-0"><div className="flex items-center justify-between border-b border-[#edf0ed] pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff5a1f]">Shop</p><h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#1d2420]">{category === "All products" ? "All sports gear" : category === "On sale" ? "On sale" : category}</h2></div><select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="rounded-full border border-[#e5eae5] bg-white px-4 py-2 text-[10px] text-[#5e645f] outline-none"><option value="latest">Sort by latest</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Highest rating</option></select></div><div className="py-6"><h3 className="text-sm font-bold text-[#ff5a1f]">Gear that performs.</h3><p className="mt-3 max-w-3xl text-[11px] leading-relaxed text-[#6d746f]">Explore our range of running, fitness, team sports and outdoor equipment. Every product is picked for performance, comfort and durability, so you can focus on training.</p></div><div className="rounded-xl bg-[#f2f5f9] p-4 sm:p-5"><div className="mb-5 flex items-center justify-between"><h3 className="text-base font-bold text-[#252b27]">Top selling</h3><span className="text-[10px] text-[#7e857f]">{visibleProducts.length} products</span></div><div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product) => <ShopProductCard key={product.id} product={product} />)}</div>{visibleProducts.length === 0 && <p className="py-10 text-center text-sm text-[#747a76]">No products match these filters.</p>}</div></section>
    </div>
  </div>;
}
function FilterTitle({ children }: { children: React.ReactNode }) { return <p className="mb-4 mt-8 border-t border-[#edf0ed] pt-5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#9ca29e]">{children}</p>; }
function ShopProductCard({ product }: { product: SportProduct }) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (!product.available || isAdding) return;

    addItem({
      id: `product-${product.id}-${product.sizes[0]}`,
      name: product.sizes.length > 1 ? `${product.name} (${product.sizes[0]})` : product.name,
      category: product.category,
      price: product.price,
      tone: product.tone,
    });

    setIsAdding(true);

    setTimeout(() => {
      setIsAdding(false);
    }, 700);
  };

  return (
    <article
      className={`min-w-0 transition-all duration-300 ${isAdding
          ? "scale-[1.02]"
          : "scale-100"
        }`}
    >
      <div
        className={`transition-all duration-300 ${isAdding
            ? "rounded-xl ring-2 ring-[#ff5a1f]/30 shadow-lg shadow-[#ff5a1f]/10"
            : ""
          }`}
      >
      <Link to={`/shop/${product.slug || product.id}`} aria-label={`View ${product.name}`} className="block">
        <ProductVisual product={product} />
      </Link>
      </div>

      <div className="px-1 pt-3">
        <p className="text-[8px] uppercase tracking-wide text-[#a3a8a4]">
          {product.category}
        </p>

        <Link to={`/shop/${product.slug || product.id}`} className="mt-1 block min-h-8 text-[11px] font-semibold leading-[1.4] text-[#252b27] hover:text-[#ff5a1f]">
          {product.name}
        </Link>

        <div className="mt-2 flex items-center gap-1 text-[9px]">
          <span className="text-[#f2bc1b]">★</span>
          <span>{product.rating}/5</span>
          <span className="text-[#a3a8a4]">|</span>
          <span className="text-[#8c938e]">
            {product.reviews} Reviews
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#e15c45]">
              €{product.price.toFixed(2)}
            </span>

            {product.oldPrice && (
              <span className="ml-1 text-[9px] text-[#9fa5a0] line-through">
                €{product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!product.available || isAdding}
            className={`rounded-full px-3 py-1.5 text-[9px] font-semibold text-white transition-all duration-300 ${isAdding
                ? "scale-95 bg-[#e04a12]"
                : "bg-[#ff5a1f] hover:bg-[#e04a12]"
              } disabled:bg-[#a6aba7]`}
          >
            {isAdding ? (
              <span className="flex items-center gap-1">
                <i className="bi bi-check2" />
                Added!
              </span>
            ) : product.available ? (
              "Add to cart"
            ) : (
              "Sold out"
            )}
          </button>
        </div>
      </div>
    </article>
  );
} 

export default Shop;
