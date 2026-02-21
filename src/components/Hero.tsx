import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden gradient-border glow rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={profilePhoto}
                alt="Thalison Silva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 px-4 py-2 bg-primary rounded-lg flex items-center gap-2 animate-float">
              <Briefcase className="w-4 h-4 text-primary-foreground" />
              <span className="text-xs font-semibold text-primary-foreground">Disponível</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-primary">Estagiário de TI B2B — Vivo</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Thalison <span className="gradient-text">Silva</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-xl leading-relaxed">
              Sou estudante de Engenharia da Computação e estagiário de TI B2B na Vivo, atuando na validação técnica de projetos corporativos de conectividade. Possuo experiência em desenvolvimento web, APIs REST e automações em Python aplicadas a cenários reais de negócio.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Vivo (Telefônica Brasil)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button asChild size="lg" className="gap-2 glow">
                <a href="https://github.com/thalisonsilva" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  Ver meu GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 gradient-border">
                <a href="/curriculo-thalison-silva.pdf" download>
                  <Download className="w-5 h-5" />
                  Baixar Currículo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://www.linkedin.com/in/thalison-silva-b00a161a7/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <a href="mailto:thalysonoliveira75@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
