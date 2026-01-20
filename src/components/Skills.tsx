import { motion } from "framer-motion";
import { Code, Database, Brain, BarChart3, Cloud, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens de Programação",
    icon: Code,
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "C#", level: 65 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 75 },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "Modelagem de Dados", level: 80 },
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 70 },
      { name: "Deep Learning", level: 65 },
      { name: "NLP", level: 60 },
      { name: "Azure ML", level: 65 },
    ],
  },
  {
    title: "Análise de Dados",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Excel Avançado", level: 90 },
      { name: "Data Visualization", level: 80 },
      { name: "ETL", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", level: 70 },
      { name: "IoT", level: 65 },
      { name: "APIs REST", level: 75 },
    ],
  },
  {
    title: "Ferramentas",
    icon: Terminal,
    skills: [
      { name: "Git", level: 70 },
      { name: "Pacote Office", level: 95 },
      { name: "VS Code", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Competências
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Minhas <span className="gradient-text">Habilidades</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
