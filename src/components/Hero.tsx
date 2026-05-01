import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Github, Download, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";
import { useMouseParallax } from "@/hooks/useMouseParallax";

const stackPrincipal = [
  "Python", "Django", "SQL", "APIs REST", "TypeScript", "Git", "Azure", "Power BI"
];

const Hero = () => {
  const { x, y } = useMouseParallax();

  // Parallax helpers — different depths for each layer
  const layer = (depth: number) => ({
    transform: `translate3d(${x * depth}px, ${y * depth}px, 0)`,
    transition: "transform 200ms cubic-bezier(0.23, 1, 0.32, 1)",
  });

  const photo3d = {
    transform: `perspective(1200px) rotateX(${y * -8}deg) rotateY(${x * 12}deg) translate3d(${x * 20}px, ${y * 20}px, 0)`,
    transition: "transform 250ms cubic-bezier(0.23, 1, 0.32, 1)",
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden perspective-1000">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative preserve-3d"
            style={photo3d}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden gradient-border glow rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={profilePhoto}
                alt="Thalison Silva"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div
              className="absolute -bottom-3 -right-3 px-4 py-2 bg-primary rounded-lg flex items-center gap-2 animate-float shadow-lg shadow-primary/40"
              style={{ transform: `translate3d(${x * 30}px, ${y * 30}px, 0)` }}
            >
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
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
              style={layer(8)}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-primary">Tecnologia da Informação — Projetos Corporativos B2B</span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={layer(14)}
            >
              Thalison <span className="gradient-text">Silva</span>
            </h1>

            <p
              className="text-muted-foreground text-lg md:text-xl mb-5 max-w-xl leading-relaxed"
              style={layer(6)}
            >
              Sou estudante de Engenharia da Computação e estagiário de TI B2B na Vivo, atuando na validação técnica de projetos corporativos de conectividade. Possuo experiência em desenvolvimento web, APIs REST e automações em Python aplicadas a cenários reais de negócio.
            </p>

            {/* Stack Principal */}
            <div className="mb-6" style={layer(10)}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Stack Principal</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {stackPrincipal.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                    className="chip-micro px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8"
              style={layer(4)}
            >
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Vivo (Telefônica Brasil)</span>
              </div>
            </div>

            <div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              style={layer(12)}
            >
              <Button asChild size="lg" className="btn-micro gap-2 glow">
                <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  Ver meu GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-micro gap-2 gradient-border">
                <a href="/curriculo-thalison-silva.pdf" download>
                  <Download className="w-5 h-5" />
                  Baixar Currículo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-micro gap-2">
                <a href="https://www.linkedin.com/in/thalison-silva-b00a161a7/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="btn-micro gap-2">
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
