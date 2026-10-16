import FilterSlider from "../Components/Home/FilterSlider/FilterSlider";
import HowToOrder from "../Components/Home/HowToOrder/HowToOrder";
import IconsCards from "../Components/Home/IconsCards";
import SportsJournal from "../Components/Home/SportsJournal";
import ProductGrid from "../Components/Home/ProductGrid/ProductGrid";
import Slider from "../Components/Home/Slider/Slider";
import Teaser from "../Components/Home/Teaser";
import WhyUs from "../Components/Home/WhyUs";

function Home() {
  return (
    <div>
      <Teaser />
      <IconsCards />
      <WhyUs />
      <FilterSlider />
      <Slider />
      <ProductGrid />
      <SportsJournal />
      <HowToOrder />
    </div>
  );
}

export default Home;
