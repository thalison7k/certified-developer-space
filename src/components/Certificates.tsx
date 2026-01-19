import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    name: "Lean Six Sigma Yellow Belt",
    issuer: "Vivo (Telefônica Brasil)",
    date: "out de 2025",
    category: "Metodologia",
    description: "Certificação em metodologia Lean Six Sigma, focada na otimização de processos, redução de desperdícios e melhoria contínua. O Yellow Belt capacita o profissional a participar de projetos de melhoria e aplicar ferramentas básicas de análise estatística.",
  },
  {
    name: "Pesquisa Visual Computacional no Azure",
    issuer: "Microsoft",
    category: "Inteligência Artificial",
    description: "Certificação que aborda técnicas de visão computacional utilizando os serviços cognitivos do Microsoft Azure, incluindo reconhecimento de imagens, detecção de objetos e análise de conteúdo visual.",
  },
  {
    name: "Análise de Dados com Power BI",
    issuer: "Suzano",
    category: "Business Intelligence",
    description: "Curso focado na análise e visualização de dados utilizando o Microsoft Power BI, abordando criação de dashboards, DAX, modelagem de dados e criação de relatórios interativos.",
  },
  {
    name: "Banco de Dados",
    issuer: "Udemy",
    category: "Banco de Dados",
    description: "Curso abrangente sobre fundamentos de bancos de dados, incluindo modelagem relacional, normalização, SQL e boas práticas de design de banco de dados.",
  },
  {
    name: "C#",
    issuer: "Microsoft",
    category: "Programação",
    description: "Certificação em linguagem C#, abordando fundamentos de programação orientada a objetos, sintaxe da linguagem, coleções, LINQ e desenvolvimento de aplicações .NET.",
  },
  {
    name: "Ciência da Computação de Harvard no Brasil",
    issuer: "Harvard University",
    category: "Fundamentos",
    description: "Curso baseado no famoso CS50 de Harvard, cobrindo fundamentos de ciência da computação, algoritmos, estruturas de dados, desenvolvimento web e pensamento computacional.",
  },
  {
    name: "Ciência de Dados",
    issuer: "Microsoft",
    category: "Data Science",
    description: "Certificação em ciência de dados abordando análise estatística, machine learning, processamento de dados e visualização utilizando ferramentas Microsoft.",
  },
  {
    name: "Criando Queries",
    issuer: "Suzano",
    category: "Banco de Dados",
    description: "Curso focado na criação e otimização de queries SQL, incluindo joins, subqueries, funções agregadas e performance de consultas.",
  },
  {
    name: "Modelos Preditivos sem Código com Azure ML",
    issuer: "Microsoft",
    category: "Machine Learning",
    description: "Certificação que ensina a criar modelos de machine learning utilizando o Azure Machine Learning Studio, sem necessidade de programação, através de interfaces drag-and-drop.",
  },
  {
    name: "Deep Learning",
    issuer: "IBM",
    category: "Inteligência Artificial",
    description: "Curso avançado sobre redes neurais profundas, incluindo CNNs, RNNs, técnicas de treinamento e aplicações práticas de deep learning.",
  },
  {
    name: "Desafio Projeto Portfólio",
    issuer: "Suzano",
    category: "Desenvolvimento",
    description: "Projeto prático de desenvolvimento de portfólio profissional, aplicando conhecimentos de frontend, design e boas práticas de desenvolvimento.",
  },
  {
    name: "Dexway English B2",
    issuer: "Telefónica",
    category: "Idiomas",
    description: "Certificação de proficiência em inglês nível B2 (intermediário-avançado) do Quadro Europeu Comum de Referência, capacitando para comunicação fluente em contextos profissionais.",
  },
  {
    name: "Dexway Espanhol B2",
    issuer: "Vivo (Telefônica Brasil)",
    category: "Idiomas",
    description: "Certificação de proficiência em espanhol nível B2, permitindo comunicação efetiva em ambientes corporativos hispânicos e interações com equipes da Telefónica global.",
  },
  {
    name: "Engenharia de Dados",
    issuer: "Microsoft",
    category: "Data Engineering",
    description: "Certificação em engenharia de dados abordando ETL, pipelines de dados, data warehousing, Azure Data Factory e arquiteturas de dados modernas.",
  },
  {
    name: "Excel Avançado",
    issuer: "Microsoft",
    category: "Produtividade",
    description: "Certificação em Excel avançado, incluindo fórmulas complexas, tabelas dinâmicas, macros, VBA e análise de dados.",
  },
  {
    name: "Explorando Queries com SQL",
    issuer: "Suzano",
    category: "Banco de Dados",
    description: "Aprofundamento em SQL com foco em queries avançadas, otimização de performance, índices e boas práticas de banco de dados.",
  },
  {
    name: "IA Conversacional",
    issuer: "Microsoft",
    category: "Inteligência Artificial",
    description: "Certificação sobre desenvolvimento de chatbots e assistentes virtuais utilizando Azure Bot Service, LUIS e técnicas de processamento de linguagem natural.",
  },
  {
    name: "Processamento de Idioma Natural",
    issuer: "Microsoft India",
    category: "Inteligência Artificial",
    description: "Curso sobre NLP (Natural Language Processing), incluindo análise de sentimentos, extração de entidades, tradução automática e compreensão de linguagem.",
  },
  {
    name: "Foreign Corrupt Practices",
    issuer: "Telefónica",
    category: "Compliance",
    description: "Treinamento em práticas anticorrupção e conformidade com leis internacionais, essencial para atuação em multinacionais.",
  },
  {
    name: "FrontEnd Development",
    issuer: "Microsoft",
    category: "Desenvolvimento",
    description: "Certificação em desenvolvimento frontend, abordando HTML5, CSS3, JavaScript, frameworks modernos e boas práticas de UI/UX.",
  },
  {
    name: "Modelagem e Projetos de Banco de Dados",
    issuer: "Suzano",
    category: "Banco de Dados",
    description: "Curso sobre modelagem conceitual, lógica e física de bancos de dados, incluindo diagramas ER, normalização e design de schemas.",
  },
  {
    name: "Game Maker",
    issuer: "Udemy",
    category: "Desenvolvimento",
    description: "Curso de desenvolvimento de jogos utilizando Game Maker Studio, abordando programação, design de jogos e mecânicas de gameplay.",
  },
  {
    name: "Azure Machine Learning",
    issuer: "Microsoft",
    category: "Machine Learning",
    description: "Certificação avançada em Azure Machine Learning, incluindo treinamento de modelos, MLOps, deployment e monitoramento de modelos em produção.",
  },
  {
    name: "Lei da Concorrência",
    issuer: "Telefónica",
    category: "Compliance",
    description: "Treinamento sobre legislação antitruste e práticas de concorrência leal, fundamental para profissionais em grandes corporações.",
  },
  {
    name: "Lógica e Pensamento Computacional",
    issuer: "Suzano",
    category: "Fundamentos",
    description: "Curso focado em desenvolver raciocínio lógico, decomposição de problemas, reconhecimento de padrões e abstração para resolução de problemas computacionais.",
  },
  {
    name: "Modelo de Relacionamento de Entidade Aprimorado",
    issuer: "Suzano",
    category: "Banco de Dados",
    description: "Aprofundamento em modelagem de dados com foco em EER (Extended Entity-Relationship), incluindo generalização, especialização e agregação.",
  },
  {
    name: "Modelos de IAs",
    issuer: "IBM",
    category: "Inteligência Artificial",
    description: "Curso sobre diferentes arquiteturas e modelos de inteligência artificial, incluindo redes neurais, árvores de decisão, SVM e ensemble methods.",
  },
  {
    name: "Pacote Office",
    issuer: "Udemy",
    category: "Produtividade",
    description: "Curso completo sobre Microsoft Office, incluindo Word, Excel, PowerPoint e Outlook para produtividade profissional.",
  },
  {
    name: "Power BI",
    issuer: "Microsoft",
    category: "Business Intelligence",
    description: "Certificação Microsoft em Power BI, abordando desde conceitos básicos até técnicas avançadas de visualização e análise de dados.",
  },
  {
    name: "Princípios de Negócios",
    issuer: "Telefónica",
    category: "Negócios",
    description: "Treinamento sobre fundamentos de gestão empresarial, estratégia corporativa e práticas de negócios da Telefónica.",
  },
  {
    name: "Processamento de Linguagem Natural",
    issuer: "IBM",
    category: "Inteligência Artificial",
    description: "Curso IBM sobre NLP utilizando Watson, incluindo classificação de texto, análise de sentimentos e chatbots inteligentes.",
  },
  {
    name: "Práticas de Segurança",
    issuer: "Telefónica",
    category: "Segurança",
    description: "Treinamento em práticas de segurança da informação, políticas de segurança corporativa e proteção de dados.",
  },
  {
    name: "Python 3",
    issuer: "Udemy",
    category: "Programação",
    description: "Curso completo de Python 3, abordando sintaxe, estruturas de dados, programação orientada a objetos, bibliotecas populares e automação.",
  },
  {
    name: "Segurança Cibernética",
    issuer: "Telefónica",
    category: "Segurança",
    description: "Certificação em segurança cibernética, incluindo proteção contra ameaças, análise de vulnerabilidades e práticas de segurança digital.",
  },
  {
    name: "Sistemas de Gerenciamento de Bancos de Dados",
    issuer: "Suzano",
    category: "Banco de Dados",
    description: "Curso sobre SGBDs, incluindo MySQL, PostgreSQL, SQL Server, administração de bancos de dados e tuning de performance.",
  },
  {
    name: "Tecnologia em Gestão Ambiental",
    issuer: "Centro Universitário Braz Cubas",
    category: "Meio Ambiente",
    description: "Formação tecnológica em gestão ambiental, abordando sustentabilidade, legislação ambiental, gestão de recursos naturais e impactos ambientais.",
  },
  {
    name: "Web Frontend - HTML, JavaScript, CSS",
    issuer: "Udemy",
    category: "Desenvolvimento",
    description: "Curso completo de desenvolvimento web frontend, abordando HTML5 semântico, CSS3 moderno, JavaScript ES6+ e responsividade.",
  },
  {
    name: "Microsoft Word",
    issuer: "Microsoft",
    category: "Produtividade",
    description: "Certificação em Microsoft Word, incluindo formatação avançada, estilos, mala direta, macros e criação de documentos profissionais.",
  },
  {
    name: "Introdução à IA",
    issuer: "IBM",
    category: "Inteligência Artificial",
    description: "Curso introdutório sobre inteligência artificial, abordando história, conceitos fundamentais, aplicações e ética em IA.",
  },
];

const categories = ["Todos", ...Array.from(new Set(certificates.map(c => c.category)))];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCertificates = selectedCategory === "Todos" 
    ? certificates 
    : certificates.filter(c => c.category === selectedCategory);

  return (
    <section id="certificados" className="section-padding relative">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Qualificações</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Certificados & <span className="gradient-text">Cursos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 35 certificações em tecnologia, incluindo Microsoft, IBM, Harvard, e empresas líderes do mercado.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {cert.category}
                  </span>
                  <h3 className="font-display text-lg font-bold mt-2 mb-1 line-clamp-2">{cert.name}</h3>
                  <p className="text-sm text-primary mb-2">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
                  )}
                  <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
