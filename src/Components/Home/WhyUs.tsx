import Container from "../../Layouts/Container";

const benefits = [
  ["bi-trophy", "Gear for every sport", "Running, fitness, team sports and outdoor equipment, all in one place."],
  ["bi-shield-check", "Quality you can trust", "Durable materials and products tested in real training before they reach our shelves."],
  ["bi-rulers", "Find your fit", "Clear size guides and 30-day returns, so getting the right size is never a gamble."],
  ["bi-truck", "Fast delivery", "Orders are packed with care and shipped with tracking, free from €50."],
  ["bi-people", "Team & club orders", "Kitting out a whole squad? We offer bundles and discounts for teams and clubs."],
  ["bi-recycle", "Built to last", "Long-lasting gear means fewer replacements and less waste."],
];

export default function WhyUs() {
  return (
    <section className="bg-[#f2f5f9] py-16 sm:py-24">
      <Container>
        <div className="max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8501a]">Why Peak Form</p>
          <h2 className="mt-3 text-[30px] font-black uppercase leading-[.98] tracking-[-0.05em] text-[#1b1f28] sm:text-[42px]">What makes us your go-to sports store?</h2>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(([icon, title, description]) => (
            <article key={title} className="border-t border-[#dce4df] pt-5">
              <i className={`bi ${icon} text-xl text-[#e8501a]`} aria-hidden="true" />
              <h3 className="mt-4 text-sm font-bold uppercase text-[#20242c]">{title}</h3>
              <p className="mt-2 max-w-[280px] text-xs leading-relaxed text-[#6d746f]">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
