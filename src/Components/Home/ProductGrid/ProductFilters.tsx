import type { ProductFilter } from "./types";

type ProductFiltersProps = {
  activeFilter: ProductFilter;
  filters: ProductFilter[];
  onFilterChange: (filter: ProductFilter) => void;
};

export default function ProductFilters({ activeFilter, filters, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="mt-8 flex flex-col gap-4 border-b border-[#ededeb] pb-6 sm:flex-row sm:items-center">
      <p className="text-[11px] font-medium text-[#30342f]">Filter by sport</p>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => onFilterChange(filter)} className={`rounded-full border px-4 py-2 text-[9px] transition ${activeFilter === filter ? "border-[#14284a] bg-[#f5f7fb] font-semibold text-[#14284a]" : "border-[#ebedeb] bg-white text-[#424742] hover:border-[#b8c5bb]"}`}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}
