import GuideCard from "./GuideCard";
import OfferCard from "../OfferCard";
import type { GuideStep } from "./types";

const steps: GuideStep[] = [
  { number: "1", title: "Create an account", description: "Sign up in seconds to save your sizes, track orders and get 10% off your first purchase.", icon: "account" },
  { number: "2", title: "Choose your gear", description: "Browse by sport, compare products and pick the size, colour or weight that suits you.", icon: "bag" },
  { number: "3", title: "Checkout securely", description: "Pay safely with your preferred payment method. Your order is protected from checkout to delivery.", icon: "card" },
  { number: "4", title: "Start training", description: "Your gear arrives at your door, ready for the track, the gym, the pitch or the trail.", icon: "heart" },
];

export default function HowToOrder() {
  return (
    <section className="relative mt-20 bg-[#070f1f] px-5 pb-16 pt-0 text-white sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-[1000px]">
        <OfferCard className="-translate-y-12" />
        <div className="mx-auto -mt-4 max-w-[680px] text-center sm:mt-16">
          <h2 className="text-[28px] font-black uppercase leading-[1.05] tracking-[-0.04em] sm:text-[34px]">How to order sports gear online</h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[9px] leading-[1.55] text-white/60">Ordering your gear is easy. Pick your sport, choose the right size, complete checkout securely and get fast delivery straight to your door.</p>
        </div>
        <div className="mt-12 grid gap-y-12 sm:mt-14 sm:grid-cols-2 sm:gap-y-16">{steps.map((step) => <GuideCard key={step.number} step={step} />)}</div>
        <div className="mt-12 flex justify-center sm:mt-16"><a href="/shop" className="rounded-full bg-[#ff5a1f] px-8 py-3 text-[10px] font-semibold transition hover:bg-[#e04a12]">Choose your gear</a></div>
      </div>
    </section>
  );
}
