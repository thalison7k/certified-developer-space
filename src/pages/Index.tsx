import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CurrentlyStudying from "@/components/CurrentlyStudying";
import Specialties from "@/components/Specialties";
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
      <FeaturedProject />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <CurrentlyStudying />
      <Specialties />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
