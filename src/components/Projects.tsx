import { motion } from "framer-motion";
import { ExternalLink, Github, Rocket, Target, Wrench, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "GamaTec Digital Spark",
    subtitle: "Plataforma de Criação de Sites Profissionais",
    problem: "Pequenas empresas não conseguiam criar sites profissionais de forma acessível e rápida.",
    solution: "Plataforma web completa com autenticação, templates personalizáveis e deploy automatizado.",
    technologies: ["TypeScript", "React", "Tailwind CSS", "Supabase", "Vite"],
    result: "Plataforma funcional permitindo a criação de sites em minutos, com painel administrativo completo.",
    tags: ["dashboard", "backend", "automação"],
    github: "https://github.com/thalison7k?tab=repositories",
    demo: "https://gamatec-digital-spark.lovable.app/auth",
  },
  {
    title: "Biblioteca Social",
    subtitle: "Sistema Web de Gestão de Biblioteca",
    problem: "Necessidade de um sistema de gerenciamento de acervo bibliográfico com controle de empréstimos.",
    solution: "Aplicação web full-stack com Django, banco de dados relacional e sistema de autenticação de usuários.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML5", "CSS3", "JavaScript"],
    result: "Sistema funcional com CRUD completo, controle de usuários e histórico de empréstimos.",
    tags: ["backend", "API", "dados"],
    github: "https://github.com/thalison7k?tab=repositories",
  },
  {
    title: "CorretorEndereco Premium",
    subtitle: "Ferramenta de Padronização de Endereços",
    problem: "Endereços corporativos com formatações inconsistentes geravam falhas em sistemas de logística.",
    solution: "Script Python com integração a APIs de geolocalização para validação e padronização automática de endereços.",
    technologies: ["Python", "Pandas", "APIs REST", "Regex", "Excel"],
    result: "Redução de erros de endereçamento e padronização automatizada de bases de dados corporativas.",
    tags: ["automação", "dados", "API"],
    github: "https://github.com/thalison7k?tab=repositories",
  },
  {
    title: "Tank Guard Dashboard",
    subtitle: "Dashboard de Monitoramento Industrial",
    problem: "Falta de visibilidade em tempo real sobre níveis de tanques e alertas de segurança em ambientes industriais.",
    solution: "Dashboard interativo com visualização de dados em tempo real, alertas configuráveis e histórico de medições.",
    technologies: ["Python", "Power BI", "SQL", "IoT", "Azure"],
    result: "Monitoramento contínuo com alertas automáticos, reduzindo riscos operacionais.",
    tags: ["dashboard", "IoT", "dados"],
    github: "https://github.com/thalison7k?tab=repositories",
  },
  {
    title: "Park Sense",
    subtitle: "Sistema IoT de Estacionamento Inteligente",
    problem: "Dificuldade em encontrar vagas disponíveis em estacionamentos, causando congestionamento.",
    solution: "Sistema com sensores IoT para detecção de vagas em tempo real, com dashboard web de monitoramento.",
    technologies: ["IoT", "Python", "Arduino", "MQTT", "Cloud"],
    result: "Protótipo funcional com detecção de vagas em tempo real e interface de visualização.",
    tags: ["IoT", "automação", "dashboard"],
    github: "https://github.com/thalison7k?tab=repositories",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">
            Portfólio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Projetos <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluções desenvolvidas para resolver problemas reais, com foco em impacto e qualidade técnica.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-border/50">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <Target className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Problema</span>
                    <p className="text-sm text-foreground mt-1">{project.problem}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Wrench className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Solução</span>
                    <p className="text-sm text-foreground mt-1">{project.solution}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Impacto / Resultado</span>
                    <p className="text-sm text-foreground mt-1">{project.result}</p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] font-medium rounded uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Ver código fonte
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" className="gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Ver demonstração
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="gap-3 glow text-base px-8">
            <a href="https://github.com/thalison7k?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              Ver todos os projetos no GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
