type OfferCardProps = {
  className?: string;
};

export default function OfferCard({ className = "" }: OfferCardProps) {
  return (
    <article className={`relative overflow-hidden rounded-xl bg-[#14284a] px-6 py-8 text-white shadow-sm sm:flex sm:items-center sm:justify-between sm:px-10 ${className}`}>
      <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(120deg,#9fb3d1_0,#9fb3d1_1px,transparent_1px,transparent_14px)]" />
      <div className="relative max-w-md">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#ffd2bf]">Join the team</p>
        <h2 className="mt-2 text-2xl font-black uppercase leading-[.95] tracking-[-0.05em] sm:text-3xl">Get 10% off your first order</h2>
        <p className="mt-3 text-xs leading-relaxed text-white/75">Create an account and use code WELCOME10 at checkout to save on your first gear order.</p>
      </div>
      <a href="/register" className="relative mt-6 inline-flex rounded-full bg-[#ff5a1f] px-6 py-3 text-[10px] font-bold uppercase tracking-wide transition hover:bg-[#e04a12] sm:mt-0">Claim 10% off</a>
    </article>
  );
}
