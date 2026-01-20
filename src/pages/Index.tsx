import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
