import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Vamos Conversar</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pronto para <span className="gradient-text">Contribuir</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou disponível para oportunidades em tecnologia, desenvolvimento e automação. Vamos conectar?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.a
            href="mailto:thalysonoliveira75@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground break-all">thalysonoliveira75@gmail.com</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/thalison-silva-b00a161a7/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Conecte-se comigo</p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Localização</h3>
            <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Vamos trabalhar <span className="gradient-text">juntos</span>?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Busco oportunidades para aplicar minhas habilidades em automação, desenvolvimento e análise de dados em projetos que geram impacto real.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="btn-micro gap-2 glow">
              <a href="mailto:thalysonoliveira75@gmail.com">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-micro gap-2">
              <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                Ver GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-micro gap-2 gradient-border">
              <a href="/curriculo-thalison-silva.pdf" download>
                <Download className="w-5 h-5" />
                Baixar Currículo
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
