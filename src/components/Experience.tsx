import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Vivo (Telefônica Brasil)",
    role: "Estagiário de TI B2B",
    period: "mar de 2025 – o momento",
    duration: "Atual",
    location: "São Paulo, Brasil · Híbrido",
    type: "Estágio",
    responsibilities: [
      "Validação técnica de projetos corporativos de conectividade",
      "Análise de documentação técnica de soluções de infraestrutura",
      "Suporte ao processo de aprovação de implantações de rede",
      "Interação com equipes de engenharia e operação",
      "Apoio a soluções empresariais de automação e infraestrutura digital",
    ],
    skills: ["TI B2B", "Conectividade", "Automação", "Infraestrutura Digital", "Análise Técnica"],
  },
  {
    company: "CG3 Telecom",
    role: "Operador de Máquinas",
    period: "mai de 2021 – ago de 2023",
    duration: "2 anos 4 meses",
    location: "São Paulo, Brasil",
    type: "Tempo integral",
    responsibilities: [
      "Preparação e setup de máquinas injetoras industriais",
      "Troca de moldes e regulagens operacionais",
      "Inspeções visuais e dimensionais de controle de qualidade",
      "Manutenção preventiva de equipamentos",
      "Organização do setor produtivo",
    ],
    skills: ["Controle de Qualidade", "Manutenção Preventiva", "Produção Industrial"],
  },
  {
    company: "Almanara Restaurantes",
    role: "Ajudante de Cozinha",
    period: "out de 2018 – abr de 2021",
    duration: "2 anos 7 meses",
    location: "São Paulo, Brasil",
    type: "Tempo integral",
    responsibilities: [
      "Execução de tarefas operacionais sob pressão",
      "Trabalho colaborativo em equipe multidisciplinar",
      "Organização e gestão de processos do setor",
    ],
    skills: ["Trabalho em Equipe", "Organização", "Gestão de Processos"],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Trajetória</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative ml-8 md:ml-20 mb-12 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-8 md:-left-12 w-4 h-4 bg-primary rounded-full glow z-10 mt-8 transform -translate-x-1/2" />

              <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    exp.duration === "Atual"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-primary/20 text-primary"
                  }`}>
                    {exp.type}
                  </span>
                  {exp.duration === "Atual" && (
                    <span className="flex items-center gap-1 text-xs text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Em andamento
                    </span>
                  )}
                  <span className="text-muted-foreground text-sm">{exp.duration}</span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2 mb-5">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
