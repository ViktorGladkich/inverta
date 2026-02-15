import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ServicesOverview />
        <SelectedWork />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
