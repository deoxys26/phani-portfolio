import { useState } from "react";

const projects = [
  {
    title: "LexIntel",
    subtitle: "Legal Document RAG Platform",
    category: "GenAI / RAG",
    description:
      "A legal document analysis platform where users can upload PDFs, ask questions, and get grounded answers using vector search and LLM responses.",
    tech: ["React", "FastAPI", "Qdrant", "Gemini", "RAG"],
    github: "https://github.com/deoxys26/lexintel",
    strength: "Best Project",
  },
  {
    title: "Product Review Sentiment Analysis",
    subtitle: "NLP Review Intelligence App",
    category: "NLP / Full Stack ML",
    description:
      "A full-stack sentiment analysis app using DistilBERT, FastAPI, and React to classify product reviews and generate structured prediction outputs.",
    tech: ["DistilBERT", "Hugging Face", "FastAPI", "React"],
    github: "https://github.com/deoxys26/product-review",
    strength: "NLP Project",
  },
  {
    title: "Image Caption Generator",
    subtitle: "Computer Vision + Deep Learning",
    category: "Computer Vision",
    description:
      "A deep learning project that generates natural-language captions for images using computer vision and sequence modeling concepts.",
    tech: ["Python", "TensorFlow", "CNN", "LSTM", "Computer Vision"],
    github: "https://github.com/deoxys26/image-caption-generator",
    strength: "CV Project",
  },
  {
    title: "Market Basket Recommendation System",
    subtitle: "Association Rule Mining",
    category: "Data Mining",
    description:
      "A recommendation system that uses Apriori association rule mining to discover product purchase patterns from transaction data.",
    tech: ["Python", "Apriori", "Streamlit", "FastAPI"],
    github: "https://github.com/deoxys26/market-basket-recommendation-system",
    strength: "Analytics Project",
  },
  {
    title: "Trading Bot",
    subtitle: "Python API Automation",
    category: "Python / API",
    description:
      "A CLI-based trading bot built with Python for Binance Futures Testnet, including signed REST API requests, logging, validation, and error handling.",
    tech: ["Python", "REST API", "CLI", "Logging"],
    github: "https://github.com/deoxys26/trading_bot",
    strength: "API Project",
  },
];

const skillGroups = {
  "AI / ML": [
    "Machine Learning",
    "Deep Learning",
    "Model Evaluation",
    "LightGBM",
    "Feature Engineering",
  ],

  "GenAI / LLM": [
    "RAG",
    "Prompt Engineering",
    "Embeddings",
    "Semantic Search",
    "Gemini API",
    "Qdrant",
  ],

  NLP: [
    "Transformers",
    "DistilBERT",
    "Sentiment Analysis",
    "Text Preprocessing",
    "Tokenization",
  ],

  Backend: [
    "Python",
    "FastAPI",
    "REST APIs",
    "Modular Backend Design",
    "Exception Handling",
  ],

  Frontend: ["React", "JavaScript", "Tailwind CSS"],

  "Tools & Deployment": ["Git", "GitHub", "Vercel", "VS Code"],
};

const botAnswers = {
  hire: {
    q: "Why should we hire you?",
    a: "I am suitable for AI/ML and GenAI internship roles because he has built practical projects across RAG, NLP, Computer Vision, FastAPI backends, and React frontends. My projects show that I can connect AI models with real applications instead of only writing notebook code.",
  },
  lexintel: {
    q: "Explain LexIntel",
    a: "LexIntel is my strongest project. It is a Legal Document RAG platform using FastAPI, React, Qdrant, and Gemini. It takes uploaded PDFs, chunks the text, creates embeddings, retrieves relevant context, and generates grounded answers.",
  },
  skills: {
    q: "What are your strongest skills?",
    a: "My strongest skills are Python, Machine Learning, NLP, RAG, FastAPI, React, Qdrant, Prompt Engineering, and project-based AI application development. I also have ECE skills like Verilog HDL, SystemVerilog, FPGA design, MATLAB, and LTspice.",
  },
  backend: {
    q: "Are you suitable for backend AI roles?",
    a: "Yes. I had worked with FastAPI, REST APIs, modular backend design, service layers, repository layers, API integration, CLI applications, logging, and exception handling. His LexIntel and Product Review projects show backend AI integration.",
  },
  cv: {
    q: "Do you have Computer Vision experience?",
    a: "Yes. I have an Image Caption Generator project, which combines computer vision and sequence modeling to generate captions for images. With a better README, sample outputs, and a small demo, it can become a strong fresher-level Computer Vision project.",
  },
};

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-100 text-slate-900">
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PortfolioBot />
      <Resume />
      <Contact />
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl"></div>
      <div className="absolute right-10 top-80 h-72 w-72 rounded-full bg-zinc-400/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-neutral-400/20 blur-3xl"></div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-300 bg-slate-100/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-950">
          Phani<span className="text-slate-500">.AI</span>
        </a>

        <div className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-950">About</a>
          <a href="#skills" className="hover:text-slate-950">Skills</a>
          <a href="#projects" className="hover:text-slate-950">Projects</a>
          <a href="#bot" className="hover:text-slate-950">AI Bot</a>
          <a href="#contact" className="hover:text-slate-950">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
        <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          AI/ML Intern • GenAI Developer • React
        </div>

        <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-6xl">
          Hi, I’m <span className="text-slate-700">Phani M</span>
          <br />
          I build AI-powered web apps.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          BTech ECE student focused on Machine Learning, GenAI, NLP, Computer Vision,
          and backend AI systems. I build projects that connect AI models with APIs,
          vector databases, and frontend interfaces.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-slate-700"
          >
            View Projects
          </a>
          <a
            href="#bot"
            className="rounded-2xl border border-slate-400 bg-slate-200 px-6 py-3 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-300"
          >
            Ask Portfolio AI
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-300 bg-slate-200 p-6 shadow-xl">
        <div className="rounded-2xl border border-slate-300 bg-slate-100 p-6">
          <p className="text-sm text-slate-500">Profile Snapshot</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            AI/ML Fresher with Full-Stack Project Experience
          </h2>

          <div className="mt-6 grid gap-4">
            <Metric label="Strongest Project" value="LexIntel RAG" />
            <Metric label="Main Stack" value="Python • FastAPI • React" />
            <Metric label="AI Focus" value="RAG • NLP • CV" />
            <Metric label="Open To" value="Remote Internships" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-300 bg-slate-200 p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-300 bg-slate-200 p-8 shadow-sm">
        <p className="text-sm font-semibold text-slate-600">About Me</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          I like building practical AI projects.
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
           I am a BTech ECE student focused on AI/ML engineering and full-stack AI
  application development. I build practical projects using Python, FastAPI,
  React, and modern AI tools, and I am currently seeking remote internships in
  AI/ML, GenAI, backend development, data, and computer vision roles.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold text-slate-600">Skills</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Categorized Technical Skills
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-3xl border border-slate-300 bg-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-slate-300 hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-900">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-400 bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold text-slate-600">Projects</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Featured AI/ML Projects
      </h2>
      <p className="mt-4 max-w-3xl text-slate-600">
        These projects show my experience across GenAI, NLP, Computer Vision, data mining,
        APIs, and backend development.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-slate-300 bg-slate-200 p-6 shadow-sm transition hover:-translate-y-2 hover:border-slate-500 hover:bg-slate-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-600">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{project.title}</h3>
                <p className="mt-1 text-slate-500">{project.subtitle}</p>
              </div>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                {project.strength}
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block font-bold text-slate-900 hover:text-slate-600"
            >
              View GitHub →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioBot() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am Phani's Portfolio Assistant. Ask me about his skills, projects, and internship suitability.",
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

  function clearChat() {
    setMessages([
      {
        role: "bot",
        text: "Chat cleared. Ask me anything about Phani's portfolio.",
      },
    ]);
  }

  return (
    <section id="bot" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-300 bg-slate-200 p-6 shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-600">Interactive Feature</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Ask Phani’s Portfolio AI
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A recruiter-friendly chatbot-style section that quickly explains my fit,
              projects, and skills.
            </p>
          </div>

          <button
            onClick={clearChat}
            className="rounded-2xl border border-slate-400 bg-slate-100 px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-300"
          >
            Clear Chat
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-300 bg-slate-100 p-5">
            <h3 className="font-bold text-slate-900">Quick Questions</h3>
            <div className="mt-5 space-y-3">
              {Object.entries(botAnswers).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => askBot(key)}
                  className="w-full rounded-2xl border border-slate-300 bg-slate-200 px-4 py-3 text-left text-sm text-slate-700 transition hover:border-slate-900 hover:bg-slate-300 hover:text-slate-950"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300 bg-slate-100 p-5">
            <div className="mb-4 flex items-center gap-3 border-b border-slate-300 pb-4">
              <div className="h-3 w-3 rounded-full bg-slate-900"></div>
              <p className="text-sm font-semibold text-slate-700">
                Portfolio Assistant Online
              </p>
            </div>

            <div className="max-h-[430px] space-y-4 overflow-y-auto pr-2">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 bg-slate-200 text-slate-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-300 bg-slate-200 p-4 text-sm text-slate-500">
              Remainder: frontend-only chatbot with predefined answers would integrate the ai models when neccessary
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-300 bg-slate-200 p-8 shadow-sm">
        <p className="text-sm font-semibold text-slate-600">Resume</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          Internship-ready profile
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          My resume focuses on GenAI, NLP, Computer Vision, FastAPI, React, and AI project development.
          I am open to remote internships where I can work on real AI applications.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/deoxys26"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-slate-700"
          >
            GitHub Profile
          </a>
          <a
            href="https://leetcode.com/u/deoxys123/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-400 bg-slate-100 px-6 py-3 font-bold text-slate-800 transition hover:border-slate-900 hover:bg-slate-300"
          >
            LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-300 bg-slate-900 p-8 text-center text-white shadow-sm">
        <p className="text-sm font-semibold text-slate-300">Contact</p>
        <h2 className="mt-2 text-3xl font-bold">Open to remote internships</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Interested in AI/ML Intern, GenAI Intern, Python Backend Intern, Data Analyst Intern,
          and Computer Vision Intern roles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:phani262005@gmail.com"
            className="rounded-2xl bg-white px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-200"
          >
            Email Me
          </a>
          <a
            href="https://github.com/deoxys26"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/30 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;