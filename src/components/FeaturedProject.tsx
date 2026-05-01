import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  "Automatização do processamento de endereços",
  "Redução de inconsistências em dados",
  "Estrutura preparada para múltiplos registros",
  "Otimização de tarefas operacionais repetitivas",
];

const FeaturedProject = () => {
  return (
    <section className="section-padding relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Destaque
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Projeto em <span className="gradient-text">Destaque</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card card-3d tilt-shine rounded-2xl overflow-hidden hover:border-primary/50 group perspective-1000"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Visual Side */}
            <div className="relative bg-gradient-to-br from-primary/20 via-accent/10 to-transparent p-8 md:p-12 flex items-center justify-center min-h-[300px] overflow-hidden">
              <div className="text-center lift-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 float-3d shadow-2xl shadow-primary/40">
                  <Zap className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">CorretorEndereco</h3>
                <p className="text-primary font-medium text-lg">Premium</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {["Python", "Pandas", "APIs REST", "Regex", "Excel"].map((tech) => (
                    <span key={tech} className="chip-micro px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-sm font-medium text-primary mb-2">
                Ferramenta de automação e tratamento de dados corporativos
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O CorretorEndereco Premium é uma ferramenta desenvolvida em Python para padronização e validação de endereços corporativos.
                A aplicação automatiza o tratamento de dados, reduz retrabalho manual e organiza bases de informação antes de implantações técnicas.
              </p>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider mb-3">Resultados</p>
                <ul className="space-y-2">
                  {results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2 glow">
                  <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Ver Código
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2">
                  <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Ver Demonstração
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
