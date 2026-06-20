import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryStrip from "./components/CategoryStrip";
import FeaturedProducts from "./components/FeaturedProducts";
import CollectionBanner from "./components/CollectionBanner";
import BrandValues from "./components/BrandValues";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryStrip />
        <FeaturedProducts />
        <CollectionBanner />
        <BrandValues />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
