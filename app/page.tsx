import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Products } from "@/components/Products";
import { Impact } from "@/components/Impact";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
