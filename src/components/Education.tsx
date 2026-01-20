import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    institution: "Univesp - Universidade Virtual do Estado de São Paulo",
    degree: "Engenharia da Computação",
    period: "ago de 2022 – ago de 2027",
    description: "Curso de graduação em Engenharia da Computação com foco em desenvolvimento de software, sistemas embarcados, inteligência artificial e computação em nuvem.",
    skills: ["Python", "SQL", "Algoritmos", "Estruturas de Dados", "Redes", "IoT"],
    status: "Em andamento",
  },
  {
    institution: "Univesp - Universidade Virtual do Estado de São Paulo",
    degree: "Bacharel em Tecnologia da Informação com Ênfase em IoT",
    period: "ago de 2022 – ago de 2025",
    description: "Curso superior focado em Internet das Coisas (IoT), sistemas distribuídos, desenvolvimento de aplicações conectadas e automação.",
    skills: ["IoT", "Sistemas Embarcados", "Automação", "Cloud Computing"],
    status: "Concluído",
  },
  {
    institution: "Centro Universitário Braz Cubas",
    degree: "Curso Superior de Tecnologia (CST) em Gestão Ambiental",
    period: "nov de 2018 – dez de 2021",
    description: "Formação em gestão ambiental com foco em sustentabilidade, legislação ambiental, gestão de recursos naturais e planejamento ambiental.",
    skills: ["Gestão Ambiental", "Sustentabilidade", "Legislação Ambiental"],
    status: "Concluído",
  },
];

const Education = () => {
  return (
    <section id="formacao" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Formação Acadêmica</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Educação & <span className="gradient-text">Formação</span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      edu.status === "Concluído" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-primary/20 text-primary"
                    }`}>
                      {edu.status}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {edu.institution}
                  </p>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
