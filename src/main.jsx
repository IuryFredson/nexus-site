import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  CalendarDays,
  Users,
  Code2,
  Database,
  Sigma,
  ShieldCheck,
  Network,
  Cpu,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";
import nexusSymbol from "../nexus-symbol.svg";
import "./styles.css";

const navItems = ["Início", "Sobre", "Encontros", "Trilhas", "Contato"];

const tracks = [
  {
    title: "Engenharia de Software",
    description: "Arquitetura, evolução, qualidade, APIs e construção de produtos reais.",
    icon: Code2,
  },
  {
    title: "Sistemas & Infraestrutura",
    description: "Linux, cloud, DevOps, redes, observabilidade e automação.",
    icon: Cpu,
  },
  {
    title: "Cybersecurity",
    description: "Segurança aplicada, defesa, análise de riscos e fundamentos de sistemas seguros.",
    icon: ShieldCheck,
  },
  {
    title: "IA, Dados & Computação Moderna",
    description: "Machine Learning, bancos de dados, sistemas distribuídos e temas emergentes.",
    icon: Database,
  },
  {
    title: "Fundamentos & Métodos Formais",
    description: "Lógica, especificação, verificação, concorrência e confiabilidade de sistemas.",
    icon: Sigma,
  },
];

function normalizeAnchor(label) {
  return label
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

const anchorTestCases = [
  { input: "Início", expected: "inicio" },
  { input: "Trilhas", expected: "trilhas" },
  { input: "Contato", expected: "contato" },
];

function runSelfTests() {
  return anchorTestCases.every((test) => normalizeAnchor(test.input) === test.expected);
}

function Button({ children, className = "", variant = "primary", ...props }) {
  return (
    <button className={`button button-${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function NexusLogo({ compact = false }) {
  return (
    <div className="nexus-logo" aria-label="Nexus">
      <img
        className={compact ? "logo-mark logo-mark-compact" : "logo-mark"}
        src={nexusSymbol}
        alt=""
        aria-hidden="true"
      />
      {!compact && <span className="logo-word">NEXUS</span>}
    </div>
  );
}

function SocialLink({ children, href = "#" }) {
  return (
    <a href={href} className="social-link">
      {children}
    </a>
  );
}

function NexusLandingPage() {
  const [open, setOpen] = useState(false);
  const selfTestsPassed = useMemo(() => runSelfTests(), []);

  return (
    <main className="site-shell">
      <div className="background-glow" />
      <div className="background-grid" />

      <header className="site-header">
        <a href="#inicio" className="brand-link" aria-label="Ir para o início">
          <NexusLogo />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item} href={`#${normalizeAnchor(item)}`}>
              {item}
            </a>
          ))}
        </nav>

        <a className="button button-primary header-cta" href="https://docs.google.com/forms/d/e/1FAIpQLSeqH6AmyvRv7mTYbf12GWXviUjam5iDlG1HpK6tK6hjgKOhyg/viewform?usp=dialog" target="_blank" rel="noreferrer">Entrar no NEXUS</a>

        <button
          className="menu-button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <nav className="mobile-nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item} href={`#${normalizeAnchor(item)}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}

      <section id="inicio" className="hero section-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-copy"
        >
          <div className="eyebrow">
            <Network size={16} /> Comunidade acadêmica de tecnologia
          </div>

          <h1>Conectando pessoas, código e conhecimento.</h1>

          <p>
            O NEXUS é uma comunidade de engenharia e sistemas criada para explorar
            fundamentos da computação, discutir tecnologia em profundidade e construir
            software real.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#encontros">
              Ver próximos encontros <ArrowRight size={18} />
            </a>
            <a className="button button-outline" href="#sobre">
              Conhecer o grupo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hero-panel-wrap"
        >
          <Card className="hero-panel">
            <div className="logo-stage">
              <NexusLogo compact />
            </div>

            <div className="event-list">
              <article className="event-card event-card-featured">
                <div>Próximo encontro</div>
                <p>Machine Learning: fundamentos, aplicações e o cenário atual da IA</p>
              </article>
              <article className="event-card">
                <div>Quando</div>
                <p>11/06, quinta-feira, 16:40 - 18:20 (5T56)</p>
              </article>
              <article className="event-card">
                <div>Onde</div>
                <p>Sala A102, IMD/UFRN</p>
              </article>
            </div>
          </Card>
        </motion.div>
      </section>

      <section id="sobre" className="about-band">
        <div className="section-wrap about-grid">
          <div>
            <p className="section-kicker">Sobre</p>
            <h2>Um ponto de encontro para quem quer construir.</h2>
          </div>
          <div className="about-content">
            <p>
              O NEXUS é o Núcleo de Engenharia, eXperiência e Sistemas: uma comunidade
              técnica nascida no IMD/UFRN para explorar fundamentos da computação, discutir
              tecnologia em profundidade e construir software real.
            </p>
            <p>
              Mais do que acompanhar ferramentas ou tendências, o NEXUS busca entender os
              princípios por trás dos sistemas: arquitetura, infraestrutura, dados, segurança,
              inteligência artificial, métodos formais e engenharia de software.
            </p>
            <div className="about-principles">
              <article>
                <h3>Fundamentos</h3>
                <p>Conceitos que atravessam tecnologias: sistemas operacionais, redes, bancos de dados, concorrência, arquitetura e teoria da computação.</p>
              </article>
              <article>
                <h3>Engenharia</h3>
                <p>Discussões sobre trade-offs, evolução de software, qualidade, DevOps, observabilidade e construção de sistemas sustentáveis.</p>
              </article>
              <article>
                <h3>Construção real</h3>
                <p>Estudo transformado em projetos, experimentos, workshops e materiais para aprender fazendo.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="trilhas" className="section-wrap tracks-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Trilhas</p>
            <h2>Áreas de atuação</h2>
          </div>
          <p>Conteúdos pensados para transformar curiosidade em prática, com temas atuais e aplicáveis.</p>
        </div>

        <div className="tracks-grid">
          {tracks.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="track-card">
              <div className="track-icon">
                <Icon size={25} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="encontros" className="section-wrap events-section">
        <div className="next-event">
          <div className="next-event-grid">
            <div>
              <div className="next-event-icon">
                <CalendarDays />
              </div>
              <h2>Próximo encontro</h2>
              <p>Encontros semanais na sala A102 do IMD, às quintas-feiras, de 16:40 a 18:20.</p>
            </div>

            <article className="talk-card">
              <div className="talk-label-row">
                <p>Encontro da semana</p>
                <span>Aberto com inscrição</span>
              </div>
              <h3>Machine Learning: fundamentos, aplicações e o cenário atual da IA</h3>
              <p className="guest-speaker">Professor convidado: Tibério Azevedo Pereira (IMD/UFRN)</p>
              <div className="talk-meta">
                <span>
                  <MapPin size={16} /> <strong>Local</strong> Sala A102, IMD/UFRN
                </span>
                <span>
                  <Clock size={16} /> <strong>Data</strong> 11/06, quinta-feira, 16:40 - 18:20 (5T56)
                </span>
              </div>
              <a className="button button-dark" href="https://docs.google.com/forms/d/e/1FAIpQLSf1w_Og0QU5VeJuUPoQnS5dUglQHiC5HBkRkx3gOaqHBPIKag/viewform?usp=dialog" target="_blank" rel="noreferrer">
                Quero participar
              </a>
            </article>
          </div>
        </div>
      </section>

      <footer id="contato" className="site-footer">
        <div className="footer-inner">
          <NexusLogo compact />

          <div className="social-links">
            <SocialLink href="https://www.instagram.com/nexus.ufrn/">Instagram</SocialLink>
            <SocialLink href="mailto:nexus.engsys@gmail.com">
              <span className="mail-link">
                <Mail size={15} /> Email
              </span>
            </SocialLink>
          </div>
        </div>

        {!selfTestsPassed && (
          <p className="test-warning">Aviso de desenvolvimento: os testes internos de navegação falharam.</p>
        )}
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<NexusLandingPage />);
