import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";
import FeaturedMenu from "../components/FeaturedMenu";
import Catering from "../components/Catering";
import Contact from "../components/Contact";
import OrderCallToAction from "../components/OrderCallToAction";

export default function Home() {
  return (
    <>
      <OrderCallToAction />
      <Hero />
      <WhyChooseUs />
      <About />
      <FeaturedMenu />
      <Catering />
      <Contact />
    </>
  );
}
