import Container from "../../Layouts/Container";

const articles = [
  { title: "How to choose the right running shoe", description: "Cushioning, drop and fit explained, so your next pair matches how and where you run.", icon: "bi-lightning-charge", tone: "linear-gradient(135deg, #0b1b33, #2e4f86)" },
  { title: "Build a home gym on a budget", description: "The few pieces of equipment that cover strength, mobility and conditioning at home.", icon: "bi-fire", tone: "linear-gradient(135deg, #ff5a1f, #ffb36b)" },
  { title: "Packing list for your first day hike", description: "What to bring, what to leave at home and how to pack it all comfortably.", icon: "bi-map", tone: "linear-gradient(135deg, #2f4a3a, #7a9a7e)" },
];

export default function SportsJournal() {
  return (
    <section className="border-t border-[#e5e9e6] py-16 sm:py-24">
      <Container>
        <div className="flex items-end justify-between gap-5">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e8501a]">The journal</p><h2 className="mt-3 text-[30px] font-black uppercase tracking-[-0.05em] text-[#1b1f28] sm:text-[42px]">Train smarter</h2></div>
          <a href="/blog" className="mb-1 shrink-0 text-xs font-bold text-[#e8501a] underline underline-offset-4">View all</a>
        </div>
        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <a key={article.title} href="/blog" className="group overflow-hidden rounded-lg border border-[#e1e7e2] bg-white transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-36 items-center justify-center" style={{ backgroundImage: article.tone }}><i className={`bi ${article.icon} text-5xl text-white/90`} aria-hidden="true" /></div>
              <div className="p-5"><p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#e8501a]">Peak Form guide</p><h3 className="mt-2 text-base font-bold leading-snug text-[#20242c]">{article.title}</h3><p className="mt-2 text-xs leading-relaxed text-[#707670]">{article.description}</p><span className="mt-4 inline-block text-xs font-bold text-[#e8501a]">Read article <span aria-hidden="true">→</span></span></div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
