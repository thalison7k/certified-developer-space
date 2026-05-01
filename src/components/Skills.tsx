import { motion } from "framer-motion";
import { Code, Database, Brain, BarChart3, Cloud, Terminal } from "lucide-react";
import { staggerContainer, fadeUp, defaultViewport } from "@/lib/motion";

const skillCategories = [
  {
    title: "Linguagens de Programação",
    icon: Code,
    skills: [
      { name: "Python", description: "Automações corporativas, tratamento de dados com Pandas, APIs REST, scripts de produtividade e processamento de arquivos." },
      { name: "SQL", description: "Queries complexas, joins, subqueries, otimização de performance e modelagem relacional." },
      { name: "C#", description: "Programação orientada a objetos, desenvolvimento .NET e lógica de aplicações desktop." },
      { name: "JavaScript / TypeScript", description: "Desenvolvimento web frontend e backend, integração com APIs e frameworks modernos." },
      { name: "HTML5 / CSS3", description: "Interfaces responsivas, semântica, Tailwind CSS, Flexbox e Grid Layout." },
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    skills: [
      { name: "SQL Server", description: "Administração, criação de procedures, triggers e otimização de consultas corporativas." },
      { name: "PostgreSQL", description: "Modelagem avançada, extensões, indexação e integridade referencial." },
      { name: "MySQL", description: "CRUD completo, normalização, views e gerenciamento de schemas." },
      { name: "Modelagem de Dados", description: "Diagramas ER, EER, normalização até 3FN e design de schemas escaláveis." },
    ],
  },
  {
    title: "Inteligência Artificial",
    icon: Brain,
    skills: [
      { name: "Machine Learning", description: "Modelos preditivos, regressão, classificação e validação cruzada com scikit-learn." },
      { name: "Deep Learning", description: "Redes neurais CNNs e RNNs, treinamento de modelos e transfer learning." },
      { name: "NLP", description: "Análise de sentimentos, extração de entidades e processamento de texto." },
      { name: "Azure ML", description: "Treinamento e deploy de modelos no-code via Azure Machine Learning Studio." },
    ],
  },
  {
    title: "Análise de Dados",
    icon: BarChart3,
    skills: [
      { name: "Power BI", description: "Dashboards interativos, DAX, modelagem dimensional e relatórios executivos." },
      { name: "Excel Avançado", description: "Fórmulas complexas, tabelas dinâmicas, macros VBA e análise de dados." },
      { name: "Data Visualization", description: "Storytelling com dados, gráficos eficazes e comunicação visual de insights." },
      { name: "ETL", description: "Extração, transformação e carga de dados entre fontes heterogêneas." },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", description: "Serviços cognitivos, Azure Functions, storage e arquitetura cloud." },
      { name: "IoT", description: "Sensores, protocolos de comunicação, monitoramento e automação com dispositivos conectados." },
      { name: "APIs REST", description: "Design, consumo e documentação de APIs RESTful com autenticação." },
      { name: "Docker", description: "Containerização de aplicações e ambientes de desenvolvimento isolados." },
    ],
  },
  {
    title: "Ferramentas & Workflow",
    icon: Terminal,
    skills: [
      { name: "Git / GitHub", description: "Versionamento, branching, pull requests, code review e CI/CD." },
      { name: "VS Code", description: "Extensões, debugging, terminal integrado e configuração de ambiente." },
      { name: "Django", description: "Framework web Python, ORM, autenticação, templates e admin." },
      { name: "Node.js", description: "Desenvolvimento backend, Express, middleware e integração com bancos de dados." },
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
            Stack Técnica
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Tecnologias & <span className="gradient-text">Competências</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              className="glass-card card-3d tilt-shine rounded-xl p-6 hover:border-primary/50 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-primary/30 lift-2">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <h4 className="text-sm font-semibold text-foreground mb-1 transition-colors duration-200 group-hover/skill:text-primary">{skill.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
