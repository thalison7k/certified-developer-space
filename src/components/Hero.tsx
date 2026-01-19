import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFxJQG6LVqWQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719063310609?e=1753315200&v=beta&t=Jl5bsj__XW_rlblGQ1KJMGVGxOPCgMc3LOXHuOmdbWA"
                alt="Thalison Silva"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center animate-float">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left flex-1"
          >
            <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Estagiário de TI B2B</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Thalison <span className="gradient-text">Silva</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-6 max-w-xl">
              Estudante de Engenharia da Computação na Univesp, apaixonado por tecnologia, 
              ciência de dados, inteligência artificial e desenvolvimento de soluções inovadoras.
            </p>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Vivo (Telefônica Brasil)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild className="gap-2 glow">
                <a href="mailto:thalysonoliveira75@gmail.com">
                  <Mail className="w-4 h-4" />
                  Contato via Email
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 gradient-border">
                <a href="https://www.linkedin.com/in/thalison-silva-b00a161a7/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
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
