export default function ReferralCard() {
  return (
    <article className="relative -translate-y-12 overflow-hidden rounded-[10px] bg-gradient-to-r from-[#0b1b33] via-[#14284a] to-[#1e3a66] px-7 py-9 sm:flex sm:items-center sm:justify-between sm:px-12">
      <div className="absolute inset-0 opacity-20 [background-image:repeating-radial-gradient(circle_at_30%_60%,transparent_0,transparent_3px,white_4px,transparent_5px)]" />
      <div className="relative">
        <h2 className="text-[27px] font-black uppercase tracking-[-0.04em]">Refer a friend</h2>
        <p className="mt-2 text-[16px]">And you both get <span className="font-bold text-[#f2bc1b]">€10!</span></p>
      </div>
      <button type="button" className="relative mt-5 rounded-full bg-[#ff5a1f] px-8 py-3 text-[10px] font-semibold transition hover:bg-[#e04a12] sm:mt-0">Refer here</button>
    </article>
  );
}
