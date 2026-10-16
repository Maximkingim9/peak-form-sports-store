import Container from "../../Layouts/Container";
import IconCard from "./IconCard";

export default function IconsCards() {
  return (
    <section className="bg-grayOff">
      <Container className="grid gap-2 py-8 md:grid-cols-3 md:gap-6 md:py-0">
        <IconCard svgClass="truck" title="Fast Shipping" description="Tracked delivery straight to your door. Shipping is free for orders over €50." />
        <IconCard svgClass="arrow-repeat" title="30-Day Returns" description="Wrong size or not the right fit? Send it back within 30 days, no questions asked." />
        <IconCard svgClass="award" title="Tested by Athletes" description="Every product is chosen for performance, durability and comfort in real training." />
      </Container>
    </section>
  );
}
