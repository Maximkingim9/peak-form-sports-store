import type { SportProduct } from "./types";

type ProductVisualProps = {
  product: SportProduct;
};

export default function ProductVisual({ product }: ProductVisualProps) {
  return (
    <div className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-md bg-[#f3f5f8]">
      {product.images?.[0] && <img src={product.images[0]} alt={product.name} className="absolute inset-0 h-full w-full object-contain p-3" />}
      <div className="absolute bottom-0 h-12 w-full rounded-t-[50%] bg-[#e9edf3]" />

      {product.badge && (
        <span className="absolute left-0 top-0 z-10 bg-[#ff5a1f] px-3 py-1 text-[8px] font-bold uppercase text-white">
          {product.badge}
        </span>
      )}

      {!product.images?.[0] && <div className="relative z-10 flex h-[112px] w-[112px] -rotate-6 flex-col items-center justify-center rounded-2xl border border-white/40 shadow-lg" style={{ backgroundImage: product.tone }}>
        <i className={`bi ${product.icon} text-[44px] leading-none text-white/90`} aria-hidden="true" />
        <span className="mt-2 text-[7px] font-black uppercase tracking-[0.2em] text-white/80">Peak Form</span>
      </div>}

      {!product.available && (
        <span className="absolute z-20 rounded-full bg-[#8e918f]/80 px-4 py-2 text-[9px] text-white">
          Out of Stock
        </span>
      )}
    </div>
  );
}
