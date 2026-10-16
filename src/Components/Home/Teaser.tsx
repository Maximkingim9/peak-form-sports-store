import Container from "../../Layouts/Container";

export default function Teaser() {
  return (
    <section>
      <div className="relative flex min-h-[560px] items-center bg-cover bg-center sm:min-h-[650px]" style={{ backgroundImage: "url('/hero-sport.svg')" }}>
        <div className="absolute inset-0 bg-[#070f1f]/30" />
        <Container className="relative flex flex-col gap-4 py-20 text-white sm:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-[#ff8a5c] sm:text-sm">New season</p>
          <h1 className="max-w-[680px] text-3xl font-bold leading-[1.05] sm:text-5xl">SPORTS GEAR THAT KEEPS UP WITH YOU</h1>
          <p className="text-sm sm:text-base">Running, fitness, team sports and outdoor. Everything you need to train.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"><p>Up to 20% off selected gear</p><span className="hidden h-3 w-px bg-grayMuted sm:block" /><p>Free shipping from €50</p></div>
          <a className="mt-2 max-w-fit rounded-3xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e04a12]" href="#product-grid">Shop all gear</a>
        </Container>
      </div>
    </section>
  );
}
