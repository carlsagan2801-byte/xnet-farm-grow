import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ProductPackages from "@/components/ProductPackages";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <ProductPackages />
      <AboutSection />
      <NewsSection />
    </main>
  );
};

export default Index;
