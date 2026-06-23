import { useEffect, useRef, useState } from "react";
import "./index.css";

const profile = {
  name: "Phani M",
  email: "phani262005@gmail.com",
  github: "https://github.com/deoxys26",
  linkedin: "https://www.linkedin.com/in/phani-m",
};

const projects = [
  {
    title: "LexIntel",
    tag: "GenAI / RAG",
    subtitle: "Legal Document Intelligence Platform",
    description:
      "A full-stack legal document assistant where users upload PDFs, ask questions, and receive source-grounded answers with filename and page references.",
    tech: ["React", "FastAPI", "Qdrant", "Gemini API", "RAG"],
    github: "https://github.com/deoxys26/lexintel",
  },
  {
    title: "Product Review Sentiment Analysis",
    tag: "NLP / ML",
    subtitle: "Transformer-based Sentiment App",
    description:
      "A sentiment analysis app using DistilBERT, FastAPI, and React to classify product reviews as positive or negative.",
    tech: ["DistilBERT", "FastAPI", "React", "NLP"],
    github: "https://github.com/deoxys26/product-review",
  },
  {
    title: "Image Caption Generator",
    tag: "Computer Vision",
    subtitle: "Deep Learning Captioning System",
    description:
      "A computer vision project that generates natural language captions from images using CNN and sequence modeling concepts.",
    tech: ["Python", "TensorFlow", "CNN", "LSTM"],
    github: "https://github.com/deoxys26/image-caption-generator",
  },
  {
    title: "Market Basket Recommendation System",
    tag: "Data Mining",
    subtitle: "Association Rule Mining",
    description:
      "A recommendation system using Apriori association rules to discover purchase patterns from transaction data.",
    tech: ["Python", "Apriori", "Streamlit", "FastAPI"],
    github: "https://github.com/deoxys26/market-basket-recommendation-system",
  },
  {
    title: "Trading Bot",
    tag: "Python / API",
    subtitle: "Binance Futures Testnet Bot",
    description:
      "A CLI-based Python trading bot using Binance Futures Testnet with REST API requests, order validation, logging, and error handling.",
    tech: ["Python", "REST API", "CLI", "Logging"],
    github: "https://github.com/deoxys26/trading_bot",
  },
];

const skills = [
  "Python",
  "FastAPI",
  "React",
  "JavaScript",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "RAG",
  "Gemini API",
  "Qdrant",
  "Prompt Engineering",
  "REST APIs",
  "GitHub",
];

const botAnswers = {
  hire: {
    q: "Why should we hire you?",
    a: "Because I build practical AI projects, not only notebook experiments. I can connect ML, GenAI, FastAPI backends, and React frontends into real applications.",
  },
  lexintel: {
    q: "Explain LexIntel",
    a: "LexIntel is a legal document RAG assistant. Users upload PDFs, ask questions, and get grounded answers using retrieved document chunks with source references.",
  },
  skills: {
    q: "What are your strongest skills?",
    a: "Python, FastAPI, React, Machine Learning, NLP, RAG, Gemini API, Qdrant, prompt engineering, and full-stack AI app development.",
  },
  roles: {
    q: "What roles are you open to?",
    a: "AI/ML Intern, GenAI Intern, Backend AI Intern, Data Intern, Computer Vision Intern, and Full Stack AI Intern roles.",
  },
};

function App() {
  return (
    <main>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudy />
      <PortfolioBot />
      <Contact />
    </main>
  );
}

function Background() {
  return (
    <div className="background">
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>
      <div className="blob blob-three"></div>
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        Phani<span>.AI</span>
      </a>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#case-study">Case Study</a>
        <a href="#bot">AI Bot</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="nav-button" href={profile.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </header>
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <Reveal>
        <div className="hero-left">
          <div className="pill">AI/ML Engineer • GenAI Builder • Full Stack Developer</div>

          <h1>
            Hi, I'm <span>Phani M</span>
            <br />
           I build practical AI software.
          </h1>

          <p>
            <p>
  BTech ECE student specializing in AI/ML and full-stack development. I build
  practical software products using Python, FastAPI, React, machine learning,
  NLP, RAG, LLM APIs, and structured backend systems.
</p>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>
            <a href="#bot" className="secondary-btn">
              Ask Portfolio AI
            </a>
          </div>

          <div className="metrics">
            <Metric value="5+" label="Projects" />
            <Metric value="AI/ML" label="Focus" />
            <Metric value="Remote" label="Open To" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="hero-card">
          <div className="profile-row">
            <div>
              <p>Profile Snapshot</p>
              <h2>AI Product Builder</h2>
            </div>
            <div className="avatar">PM</div>
          </div>

                    <div className="inner-card">
            <p className="label">Professional Summary</p>
            <h3>AI/ML and full-stack developer focused on practical product development.</h3>
            <p>
              I build end-to-end AI applications using Python, FastAPI, React, machine
              learning, NLP, RAG pipelines, LLM APIs, and clean backend architecture.
            </p>
          </div>

          <div className="mini-grid">
            <InfoCard title="Primary Stack" value="Python • FastAPI • React" />
            <InfoCard title="AI/ML Skills" value="ML • NLP • RAG • LLMs" />
            <InfoCard title="Tools" value="GitHub • APIs • Qdrant" />
            <InfoCard title="Open To" value="AI/ML & GenAI Internships" />
          </div>

          <div className="mini-grid">
            <InfoCard title="Strong Project" value="LexIntel" />
            <InfoCard title="Core Stack" value="FastAPI + React" />
            <InfoCard title="AI Focus" value="RAG + NLP" />
            <InfoCard title="Looking For" value="Internships" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="info-card">
      <p>{title}</p>
      <h4>{value}</h4>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <Reveal>
      <div className="section-header">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        {text && <span>{text}</span>}
      </div>
    </Reveal>
  );
}

function About() {
  const areas = [
    {
      title: "AI/ML Engineering",
      text: "Building models, evaluating outputs, and connecting ML systems with real applications.",
    },
    {
      title: "Generative AI",
      text: "Creating RAG workflows, prompt pipelines, and Gemini-powered AI applications.",
    },
    {
      title: "Backend AI",
      text: "Designing FastAPI services, clean routes, modular logic, and API integrations.",
    },
    {
      title: "Full Stack Products",
      text: "Connecting React frontends with AI-powered backend systems.",
    },
  ];

  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About"
        title="I like building practical AI projects."
        text="My goal is to build AI systems that are useful, explainable, and connected to real frontend/backend products."
      />

      <div className="card-grid">
        {areas.map((area, index) => (
          <Reveal key={area.title} delay={index * 100}>
            <div className="feature-card">
              <div className="icon-box"></div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Skills"
        title="Technical stack I work with"
        text="A focused stack for AI/ML projects, backend AI systems, and full-stack product development."
      />

      <div className="skills-wrap">
        {skills.map((skill, index) => (
          <Reveal key={skill} delay={(index % 8) * 60}>
            <span className="skill">{skill}</span>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="wide-card">
          <h3>What this means practically</h3>
          <p>
            I can build an AI feature from the backend route to the frontend UI:
            data input, prompt design, model/API call, output formatting, and
            user-facing interface.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Projects"
        title="Featured AI/ML work"
        text="Scroll through each project card. They pop out one by one like portfolio windows."
      />

      <div className="projects-list">
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <article className="project-card">
              <div className="project-left">
                <div className="project-top">
                  <span>{project.tag}</span>
                  <strong>0{index + 1}</strong>
                </div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>

              <div className="project-right">
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer">
                  View GitHub →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CaseStudy() {
  const timeline = [
    "Started with a simple legal document assistant idea.",
    "Added PDF upload and page-wise text extraction.",
    "Stored filename, page number, chunk index, and source text.",
    "Used Qdrant for semantic retrieval.",
    "Generated grounded answers using Gemini API.",
    "Planned Phase 2 upgrades: parent-child chunking, re-ranking, better citations.",
  ];

  return (
    <section id="case-study" className="section">
      <SectionHeader
        eyebrow="Case Study"
        title="LexIntel project journey"
        text="This section is built like a scroll-based process window."
      />

      <div className="case-grid">
        <Reveal>
          <div className="case-main">
            <p>Main Project</p>
            <h3>LexIntel</h3>
            <span>
              A practical GenAI product showing backend design, retrieval,
              embeddings, PDF processing, and frontend integration.
            </span>
            <a href="https://github.com/deoxys26/lexintel" target="_blank" rel="noreferrer">
              Open Repo
            </a>
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, index) => (
            <Reveal key={item} delay={index * 100}>
              <div className="timeline-card">
                <p>Step 0{index + 1}</p>
                <h4>{item}</h4>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioBot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am Phani's Portfolio Assistant. Ask me about his skills, projects, and internship fit.",
    },
  ]);

  function askBot(key) {
    const item = botAnswers[key];

    setMessages((prev) => [
      ...prev,
      { role: "user", text: item.q },
      { role: "bot", text: item.a },
    ]);
  }

  return (
    <section id="bot" className="section">
      <SectionHeader
        eyebrow="Interactive"
        title="Ask my portfolio AI"
        text="A chatbot-style interactive section for recruiters."
      />

      <div className="bot-grid">
        <Reveal>
          <div className="question-box">
            <h3>Quick Questions</h3>

            {Object.entries(botAnswers).map(([key, item]) => (
              <button key={key} type="button" onClick={() => askBot(key)}>
                {item.q}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="chat-box">
            <div className="status">
              <span></span>
              Portfolio Assistant Online
            </div>

            <div className="messages">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`message ${message.role === "user" ? "user" : "bot"}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <Reveal>
        <div className="contact-card">
          <p>Contact</p>
          <h2>Open to remote internships</h2>
          <span>
            Interested in AI/ML Intern, GenAI Intern, Backend AI Intern, Data
            Intern, Computer Vision Intern, and Full Stack AI Intern roles.
          </span>

          <div className="contact-actions">
            <a href={`mailto:${profile.email}`}>Email Me</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Reveal>

      <footer>Built by Phani M • AI/ML + Full Stack Portfolio</footer>
    </section>
  );
}

export default App;