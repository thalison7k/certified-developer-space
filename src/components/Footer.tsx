import { motion } from "framer-motion";
import { Linkedin, Mail, Heart, ExternalLink, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2025 Thalison Silva. Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </div>
            <a
              href="https://gamateciadesenvolvimentowebprofissional.lovable.app/site"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 hover:border-primary/60 hover:from-primary/30 hover:to-accent/30 transition-all duration-300"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Desenvolvido por Gama Tec
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <a href="mailto:thalysonoliveira75@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/thalison-silva-b00a161a7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
