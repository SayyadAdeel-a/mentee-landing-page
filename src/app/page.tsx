import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductBento } from "@/components/ProductBento";
import { CoverflowCards } from "@/components/CoverflowCards";
import { CurvedMarqueeSection } from "@/components/CurvedMarqueeSection";
import { Approach } from "@/components/Approach";
import { Capabilities } from "@/components/Capabilities";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProductBento />
        <CoverflowCards />
        <CurvedMarqueeSection />
        <Approach />
        <Capabilities />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
