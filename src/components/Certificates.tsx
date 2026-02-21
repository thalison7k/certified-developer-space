import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useState } from "react";

const certificates = [
  { name: "Lean Six Sigma Yellow Belt", issuer: "Vivo (Telefônica Brasil)", category: "Metodologia" },
  { name: "Pesquisa Visual Computacional no Azure", issuer: "Microsoft", category: "Inteligência Artificial" },
  { name: "Análise de Dados com Power BI", issuer: "Suzano", category: "Business Intelligence" },
  { name: "Banco de Dados", issuer: "Udemy", category: "Banco de Dados" },
  { name: "C#", issuer: "Microsoft", category: "Programação" },
  { name: "Ciência da Computação de Harvard no Brasil", issuer: "Harvard University", category: "Fundamentos" },
  { name: "Ciência de Dados", issuer: "Microsoft", category: "Data Science" },
  { name: "Criando Queries", issuer: "Suzano", category: "Banco de Dados" },
  { name: "Modelos Preditivos sem Código com Azure ML", issuer: "Microsoft", category: "Machine Learning" },
  { name: "Deep Learning", issuer: "IBM", category: "Inteligência Artificial" },
  { name: "Desafio Projeto Portfólio", issuer: "Suzano", category: "Desenvolvimento" },
  { name: "Dexway English B2", issuer: "Telefónica", category: "Idiomas" },
  { name: "Dexway Espanhol B2", issuer: "Vivo (Telefônica Brasil)", category: "Idiomas" },
  { name: "Engenharia de Dados", issuer: "Microsoft", category: "Data Engineering" },
  { name: "Excel Avançado", issuer: "Microsoft", category: "Produtividade" },
  { name: "Explorando Queries com SQL", issuer: "Suzano", category: "Banco de Dados" },
  { name: "IA Conversacional", issuer: "Microsoft", category: "Inteligência Artificial" },
  { name: "Processamento de Idioma Natural", issuer: "Microsoft India", category: "Inteligência Artificial" },
  { name: "Foreign Corrupt Practices", issuer: "Telefónica", category: "Compliance" },
  { name: "FrontEnd Development", issuer: "Microsoft", category: "Desenvolvimento" },
  { name: "Modelagem e Projetos de Banco de Dados", issuer: "Suzano", category: "Banco de Dados" },
  { name: "Game Maker", issuer: "Udemy", category: "Desenvolvimento" },
  { name: "Azure Machine Learning", issuer: "Microsoft", category: "Machine Learning" },
  { name: "Lei da Concorrência", issuer: "Telefónica", category: "Compliance" },
  { name: "Lógica e Pensamento Computacional", issuer: "Suzano", category: "Fundamentos" },
  { name: "Modelo de Relacionamento de Entidade Aprimorado", issuer: "Suzano", category: "Banco de Dados" },
  { name: "Modelos de IAs", issuer: "IBM", category: "Inteligência Artificial" },
  { name: "Pacote Office", issuer: "Udemy", category: "Produtividade" },
  { name: "Power BI", issuer: "Microsoft", category: "Business Intelligence" },
  { name: "Princípios de Negócios", issuer: "Telefónica", category: "Negócios" },
  { name: "Processamento de Linguagem Natural", issuer: "IBM", category: "Inteligência Artificial" },
  { name: "Práticas de Segurança", issuer: "Telefónica", category: "Segurança" },
  { name: "Python 3", issuer: "Udemy", category: "Programação" },
  { name: "Segurança Cibernética", issuer: "Telefónica", category: "Segurança" },
  { name: "Sistemas de Gerenciamento de Bancos de Dados", issuer: "Suzano", category: "Banco de Dados" },
  { name: "Tecnologia em Gestão Ambiental", issuer: "Centro Universitário Braz Cubas", category: "Meio Ambiente" },
  { name: "Web Frontend - HTML, JavaScript, CSS", issuer: "Udemy", category: "Desenvolvimento" },
  { name: "Microsoft Word", issuer: "Microsoft", category: "Produtividade" },
  { name: "Introdução à IA", issuer: "IBM", category: "Inteligência Artificial" },
];

const categories = ["Todos", ...Array.from(new Set(certificates.map(c => c.category)))];

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCertificates = selectedCategory === "Todos"
    ? certificates
    : certificates.filter(c => c.category === selectedCategory);

  return (
    <section id="certificados" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-primary font-medium mb-2 tracking-wider uppercase text-sm">Qualificações</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Certificados & <span className="gradient-text">Cursos</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            As certificações complementam minha experiência prática em desenvolvimento e automação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-1.5 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="glass-card rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold line-clamp-2 leading-tight">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
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
