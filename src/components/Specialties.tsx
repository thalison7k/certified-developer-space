import { motion } from "framer-motion";
import { Terminal, Globe, BarChart3 } from "lucide-react";

const specialties = [
  {
    icon: Terminal,
    title: "Automação com Python",
    description: "Scripts, tratamento de dados, automações corporativas e produtividade.",
    tags: ["automação", "dados", "backend"],
  },
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    description: "Aplicações web, APIs REST, autenticação e integração de sistemas.",
    tags: ["API", "backend", "dashboard"],
  },
  {
    icon: BarChart3,
    title: "Dados & Dashboards",
    description: "Visualização de dados, dashboards interativos e análise de informações.",
    tags: ["dashboard", "dados", "automação"],
  },
];

const Specialties = () => {
  return (
    <section id="especialidades" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Áreas de Atuação
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Minhas <span className="gradient-text">Especialidades</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialties.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <spec.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{spec.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{spec.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {spec.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
