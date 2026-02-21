import { motion } from "framer-motion";
import { BookOpen, TrendingUp } from "lucide-react";

const topics = [
  {
    name: "Estruturas de Dados",
    description: "Listas, filas, pilhas, árvores, grafos e análise de complexidade algorítmica.",
    progress: "Avançando",
  },
  {
    name: "APIs REST",
    description: "Design, autenticação, versionamento, documentação e boas práticas de desenvolvimento.",
    progress: "Praticando",
  },
  {
    name: "Engenharia de Software",
    description: "Padrões de projeto, arquitetura de software, metodologias ágeis e ciclo de vida de desenvolvimento.",
    progress: "Estudando",
  },
  {
    name: "Cloud Computing (Azure)",
    description: "Serviços cloud, infraestrutura como código, deploy e monitoramento de aplicações.",
    progress: "Explorando",
  },
];

const CurrentlyStudying = () => {
  return (
    <section id="estudando" className="section-padding relative">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Evolução Contínua
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Estudando <span className="gradient-text">Atualmente</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{topic.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-primary">
                    <TrendingUp className="w-3 h-3" />
                    {topic.progress}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyStudying;
