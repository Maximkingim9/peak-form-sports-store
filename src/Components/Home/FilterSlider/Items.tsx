import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import items from "../../../assets/items.json";
import { useCart } from "../../../Context/CartContext";

type Product = {
  category: string;
  name: string;
  rating: number;
  reviews: number;
  highlight?: string;
  spec?: string;
  price: {
    amount: number;
    currency: string;
    unit: string;
  };
  size_options: string[];
  filter: "best" | "bundle" | "sale";
};

const products = items as Product[];

const categoryIcons: Record<string, string> = {
  RUNNING: "bi-lightning-charge",
  FITNESS: "bi-fire",
  "TEAM SPORTS": "bi-dribbble",
  OUTDOOR: "bi-compass",
};

const formatPrice = (product: Product) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: product.price.currency,
  }).format(product.price.amount);

function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <article className="h-full">
      <div className="relative h-[147px] overflow-hidden rounded-md bg-[#f4f4f4]">
        <div className="flex h-full items-center justify-center">
          <div className="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-full bg-[#e9edf3] text-center text-[8px] uppercase tracking-wider text-gray-400">
            <i className={`bi ${categoryIcons[product.category] ?? "bi-trophy"} text-3xl text-[#14284a]`} aria-hidden="true" />
            {product.category}
          </div>
        </div>
      </div>

      <div className="px-1 pt-4 text-center">
        <div className="mb-2 text-[9px] font-medium text-gray-400">
          {product.category}
        </div>

        <h3 className="mx-auto mb-2 h-9 overflow-hidden text-[12px] font-medium leading-[1.45] text-gray-900">
          {product.name}
        </h3>

        <div className="flex items-center justify-center gap-[3px] text-[9px] text-gray-500">
          <span className="text-[11px] text-yellow-400">★</span>

          <strong className="text-gray-700">
            {product.rating}
          </strong>

          <span>/5</span>

          <span className="mx-1 text-gray-300">|</span>

          <strong className="text-gray-700">
            {product.reviews}
          </strong>

          <span className="text-gray-400">
            Reviews
          </span>
        </div>

        {product.highlight && (
          <div className="mx-auto my-2 w-fit rounded-sm bg-[#f5f7fb] px-2 py-1 text-[8px] text-[#1e3a66]">
            {product.highlight}
          </div>
        )}

        {product.spec && (
          <div className="mb-2 flex justify-center gap-2 text-[9px] text-gray-400">
            <span>{product.spec}</span>
          </div>
        )}

        <div className="flex min-h-[25px] items-baseline justify-center gap-1">
          <span className="text-[12px] font-semibold text-red-500">
            {formatPrice(product)}
          </span>

          <span className="text-[9px] text-gray-400">
            / {product.price.unit}
          </span>
        </div>

        <div className="my-2.5 flex justify-center gap-1">
          {product.size_options.map((option) => (
            <button
              key={option}
              type="button"
              className="h-5 min-w-[34px] rounded-sm border border-gray-200 bg-white px-1.5 text-[8px] text-gray-600 transition hover:border-[#14284a] hover:text-[#14284a]"
            >
              {option}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => addItem({ id: `featured-${product.name}`, name: product.name, category: product.category, price: product.price.amount })}
          className="h-7 rounded-full bg-[#ff5a1f] px-4 text-[9px] font-semibold text-white transition hover:bg-[#e04a12]"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default function ProductCarousel() {
  const [activeFilter, setActiveFilter] = useState<
    "best" | "bundle" | "sale"
  >("best");

  const filteredProducts = products.filter(
    (product) => product.filter === activeFilter
  );

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-9 grid grid-cols-3 gap-2 sm:gap-5">
        <button
          type="button"
          onClick={() => setActiveFilter("best")}
          className={`h-[46px] rounded-full border text-[10px] font-semibold sm:text-[13px] ${activeFilter === "best"
              ? "border-[#14284a] bg-[#f5f7fb] text-[#14284a]"
              : "border-gray-100 bg-white text-gray-700"
            }`}
        >
          Best Sellers
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("bundle")}
          className={`h-[46px] rounded-full border text-[10px] font-semibold sm:text-[13px] ${activeFilter === "bundle"
              ? "border-[#14284a] bg-[#f5f7fb] text-[#14284a]"
              : "border-gray-100 bg-white text-gray-700"
            }`}
        >
          Bundles & Promotions
        </button>

        <button
          type="button"
          onClick={() => setActiveFilter("sale")}
          className={`h-[46px] rounded-full border text-[10px] font-semibold sm:text-[13px] ${activeFilter === "sale"
              ? "border-[#14284a] bg-[#f5f7fb] text-[#14284a]"
              : "border-gray-100 bg-white text-gray-700"
            }`}
        >
          On Sale
        </button>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-5">
        <aside className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[10px] bg-[#0b1b33] text-white lg:min-h-[348px]">
          <div className="absolute inset-x-0 top-0 h-[220px] overflow-hidden">
            <div className="absolute -left-10 top-6 h-[200px] w-[420px] -rotate-12 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_46px,rgba(255,255,255,0.08)_46px,rgba(255,255,255,0.08)_48px)]" />
            <div className="absolute left-1/2 top-8 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#1e3a66]" />
            <div className="absolute left-1/2 top-12 flex h-[120px] w-[120px] -translate-x-1/2 rotate-[-8deg] items-center justify-center rounded-3xl bg-gradient-to-br from-[#ff5a1f] to-[#ffb36b] shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
              <i className="bi bi-trophy text-5xl text-white" aria-hidden="true" />
            </div>
          </div>

          <div className="relative z-10 px-7 pb-7 pt-5 text-center">
            <h2 className="mb-2 text-[15px] font-semibold">
              Shop our Best Sellers
            </h2>

            <p className="mx-auto mb-4 max-w-[220px] text-[10px] leading-[1.5] text-white/70">
              The gear our customers reach for most,
              plus bundles and deals for your next
              training block.
            </p>

            <a
              href="/shop"
              className="text-[10px] text-[#ff8a5c] transition hover:text-white"
            >
              View All
            </a>
          </div>
        </aside>

        <div className="relative min-w-0 overflow-hidden">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".products-prev",
              nextEl: ".products-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            watchOverflow
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 2.25,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
            }}
            className="!overflow-visible"
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide
                key={`${product.name}-${index}`}
                className="h-auto"
              >
                <ProductCard product={product} />
              </SwiperSlide>
            ))}

            <button
              type="button"
              className="products-prev absolute left-5 top-[125px] z-20 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-white text-xl leading-none text-gray-500 shadow-md transition hover:bg-gray-50"
              aria-label="Previous products"
            >
              ‹
            </button>

            <button
              type="button"
              className="products-next absolute right-5 top-[125px] z-20 flex h-6 w-6 translate-x-1/2 items-center justify-center rounded-full bg-white text-xl leading-none text-gray-500 shadow-md transition hover:bg-gray-50"
              aria-label="Next products"
            >
              ›
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
