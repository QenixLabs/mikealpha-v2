import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import InterestSection from '@/sections/InterestSection';
import PromotedSection from '@/sections/PromotedSection';
import ProductsSection from '@/sections/ProductsSection';
import ImpactSection from '@/sections/ImpactSection';
import BlogSection from '@/sections/BlogSection';
import SuccessStoriesSection from '@/sections/SuccessStoriesSection';
import NewsEventsSection from '@/sections/NewsEventsSection';
import Footer from '@/sections/Footer';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <InterestSection />
        <PromotedSection />
        <ProductsSection />
        <ImpactSection />
        <BlogSection />
        <SuccessStoriesSection />
        <NewsEventsSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
