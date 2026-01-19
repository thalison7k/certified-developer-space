import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Vivo (Telefônica Brasil)",
    role: "Estagiário de TI B2B",
    period: "mar de 2025 - o momento",
    duration: "11 meses",
    location: "São Paulo, Brasil · Híbrido",
    type: "Estágio",
    description: "Atuação na área de Tecnologia da Informação voltada para o ambiente B2B (corporativo), com foco na triagem, validação e suporte ao processo de aprovação de projetos técnicos relacionados a soluções de conectividade, automação e infraestrutura digital para empresas parceiras da Vivo.",
    skills: ["TI B2B", "Conectividade", "Automação", "Infraestrutura Digital"],
  },
  {
    company: "CG3 Telecom",
    role: "Operador de Máquinas",
    period: "mai de 2021 - ago de 2023",
    duration: "2 anos 4 meses",
    location: "São Paulo, Brasil",
    type: "Tempo integral",
    description: "Atuei como Operador de Máquinas Injetoras, sendo responsável pelo auxílio na preparação e setup das máquinas, troca de moldes, regulagens operacionais e controle de parâmetros de produção. Realizava inspeções visuais e dimensionais das peças, assegurando a qualidade do produto final. Auxiliei na manutenção preventiva de equipamentos e na organização do setor produtivo.",
    skills: ["Preparação de máquinas", "Troca de moldes", "Inspeção de qualidade", "Manutenção preventiva", "Produção industrial"],
  },
  {
    company: "Almanara Restaurantes",
    role: "Ajudante de Cozinha",
    period: "out de 2018 - abr de 2021",
    duration: "2 anos 7 meses",
    location: "São Paulo, Brasil · No local",
    type: "Tempo integral",
    description: "Atuação como Auxiliar Geral na área de culinária, desenvolvendo habilidades em trabalho em equipe, organização e execução de tarefas sob pressão.",
    skills: ["Culinária", "Trabalho em equipe", "Organização"],
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
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Trajetória Profissional</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow z-10 mt-8" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} ml-8 md:ml-0`}>
                <div className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-muted-foreground text-sm">{exp.duration}</span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
