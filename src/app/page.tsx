import { Footer } from "@/components/layout/Footer";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { Technology } from "@/components/sections/Technology";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <WhyUs />
        <Technology />

        <ServicesOverview />
        <Process />
        <Projects />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
