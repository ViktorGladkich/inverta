import { Footer } from "@/components/layout/Footer";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Features } from "@/components/sections/Features";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <Features />

        <ServicesOverview />
        <SelectedWork />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
