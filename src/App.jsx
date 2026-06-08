import { useState } from "react";

const projects = [
 {
  title: "LexIntel",
  subtitle: "Legal Document RAG Platform",
  category: "GenAI / RAG",
  description:
    "A full-stack legal document analysis platform where users can upload PDFs, ask questions, and receive source-grounded answers with filename and page references. The stable version uses React, FastAPI, Gemini API, and Qdrant for RAG-based document question answering. The Phase 2 upgrade adds parent-child sliding window chunking, richer Qdrant metadata, and cross-encoder re-ranking for better retrieval quality.",
  tech: [
    "React",
    "FastAPI",
    "Qdrant",
    "Gemini API",
    "RAG",
    "Sentence Transformers",
    "Cross-Encoder Re-ranking"
  ],
  highlights: [
    "Built PDF upload and page-wise text extraction pipeline",
    "Implemented RAG-based legal document question answering",
    "Used Qdrant for semantic vector search and source retrieval",
    "Returned grounded answers with filename and page number references",
    "Added Phase 2 parent-child sliding window chunking",
    "Integrated cross-encoder re-ranking in a separate advanced branch"
  ],
  github: "https://github.com/deoxys26/lexintel",
  advancedBranch: "https://github.com/deoxys26/lexintel/tree/lexintel-3-rag-upgrade",
  live: "",
  links: [
    {
      label: "Stable Version",
      url: "https://github.com/deoxys26/lexintel"
    },
    {
      label: "Phase 2 Advanced RAG Branch",
      url: "https://github.com/deoxys26/lexintel/tree/lexintel-3-rag-upgrade"
    },
    {
      label: "Phase 1 Changes",
      url: "https://github.com/deoxys26/lexintel/blob/main/docs/Phase_1_Changes.md"
    },
    {
      label: "Phase 2 Changes",
      url: "https://github.com/deoxys26/lexintel/tree/lexintel-3-rag-upgrade/Phase_2_Changes"
    }
  ]
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
      "A CLI-based trading bot built with Python for Binance Futures Testnet, including signed REST API requests, validation, logging, and error handling.",
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
    "Grounded Responses",
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
    "API Debugging",
  ],
  Frontend: ["React", "JavaScript", "Tailwind CSS", "Axios"],
  "Tools & Deployment": ["Git", "GitHub", "Vercel", "VS Code", "Swagger"],
};

const botAnswers = {
  hire: {
    q: "Why should we hire you?",
    a: "I am suitable for AI/ML and GenAI internship roles because I have built practical projects across RAG, NLP, Computer Vision, FastAPI backends, and React frontends. My projects show that I can connect AI models with real applications instead of only working on notebook-based experiments.",
  },
  lexintel: {
    q: "Explain LexIntel",
    a: "LexIntel is my strongest project. It is a legal document intelligence platform using FastAPI, React, Qdrant, and Gemini. I improved it from a basic PDF chatbot into a source-grounded RAG system that returns filename, page number, source text, chunk index, and similarity score for each answer.",
  },
  skills: {
    q: "What are your strongest skills?",
    a: "My strongest skills are Python, Machine Learning, NLP, RAG, FastAPI, React, Qdrant, Prompt Engineering, source-grounded LLM responses, and full-stack AI application development.",
  },
  backend: {
    q: "Are you suitable for backend AI roles?",
    a: "Yes. I have worked with FastAPI, REST APIs, modular backend design, API integration, CLI applications, logging, exception handling, Qdrant vector search, and Gemini API integration. My LexIntel and Product Review projects show backend AI integration with real frontend applications.",
  },
  debugging: {
    q: "What real debugging did you do?",
    a: "In LexIntel, I debugged upload failures, Qdrant 404 errors caused by incorrect cluster URLs, backend port conflicts between 8000 and 8001, frontend API mismatches, and missing page metadata in the RAG pipeline.",
  },
  cv: {
    q: "Do you have Computer Vision experience?",
    a: "Yes. I have an Image Caption Generator project, which combines computer vision and sequence modeling to generate captions for images. With a stronger README, sample outputs, and a small demo, it can become a strong fresher-level CV project.",
  },
};

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <BackgroundGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LexIntelCaseStudy />
      <PortfolioBot />
      <Resume />
      <Contact />
    </main>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl"></div>
      <div className="absolute right-10 top-80 h-72 w-72 rounded-full bg-zinc-300/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/2 h-72 w-72 rounded-full bg-neutral-300/20 blur-3xl"></div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-bold tracking-tight text-slate-950">
          Phani<span className="text-slate-500">.AI</span>
        </a>

        <div className="hidden gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-slate-950">
            About
          </a>
          <a href="#skills" className="hover:text-slate-950">
            Skills
          </a>
          <a href="#projects" className="hover:text-slate-950">
            Projects
          </a>
          <a href="#case-study" className="hover:text-slate-950">
            Case Study
          </a>
          <a href="#bot" className="hover:text-slate-950">
            AI Bot
          </a>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center"
    >
      <div>
        <div className="mb-5 inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          AI/ML Intern • GenAI Developer • React + FastAPI
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
          Hi, I&apos;m <span className="text-slate-700">Phani M</span>
          <br />
          I build AI-powered web apps.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
          BTech ECE student focused on AI/ML engineering and full-stack AI
          application development. I build practical projects using Python,
          FastAPI, React, RAG, vector search, and modern AI tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-slate-700"
          >
            View Projects
          </a>
          <a
            href="#case-study"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-slate-900"
          >
            View LexIntel Case Study
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
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
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </p>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          I like building practical AI projects.
        </h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
          I am a BTech ECE student focused on AI/ML engineering and full-stack AI
          application development. I build practical projects using Python,
          FastAPI, React, and modern AI tools, and I am currently seeking remote
          internships in AI/ML, GenAI, backend development, data, and computer
          vision roles.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Relevant Technical Skills
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-xl font-bold text-slate-900">{category}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700"
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
      <SectionLabel>Projects</SectionLabel>
      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Featured AI/ML Projects
      </h2>
      <p className="mt-4 max-w-3xl text-slate-600">
        These projects show my experience across GenAI, NLP, Computer Vision,
        data mining, APIs, and backend development.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:border-slate-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-1 text-slate-500">{project.subtitle}</p>
              </div>
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                {project.strength}
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-600">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>

                      <div className="mt-4 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-slate-900 hover:text-slate-600"
            >
              View GitHub →
            </a>

            {project.advancedBranch && (
              <a
                href={project.advancedBranch}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-slate-900 hover:text-slate-600"
              >
                Phase 2 Branch →
              </a>
            )}
          </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LexIntelCaseStudy() {
  const improvements = [
    {
      title: "Basic Version",
      points: [
        "Uploaded PDFs",
        "Extracted text from documents",
        "Created chunks and embeddings",
        "Generated AI answers using retrieved context",
      ],
    },
    {
      title: "Improved Phase 1 Version",
      points: [
        "Extracts PDF text page-by-page",
        "Stores filename, page number, chunk index, and source text in Qdrant",
        "Returns source-grounded answers with page-level citations",
        "Displays similarity scores and retrieved text in the frontend",
      ],
    },
  ];

  const challenges = [
    "Upload endpoint failed because upload and Qdrant indexing were connected.",
    "Qdrant returned 404 due to incorrect cluster URL configuration.",
    "Port 8000 had an old backend process, so testing moved to port 8001.",
    "Frontend API was calling the wrong backend port during testing.",
    "Original chunks did not preserve page numbers, so citations were not possible.",
  ];

  return (
    <section id="case-study" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionLabel>Case Study</SectionLabel>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          How I improved LexIntel from a basic RAG chatbot
        </h2>
        <p className="mt-4 max-w-4xl text-slate-600 leading-7">
          LexIntel started as a basic legal document chatbot. I improved it into
          a source-grounded RAG system where every answer can be verified using
          filename, page number, retrieved source text, chunk index, and similarity
          score.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {improvements.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <ul className="mt-5 space-y-3 text-slate-600">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h3 className="text-xl font-bold text-slate-950">
            Issues I Faced and Solved
          </h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 shadow-sm"
              >
                {challenge}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950">
            Final Phase 1 Result
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            The final version supports PDF upload, page-wise extraction, chunking,
            embeddings, Qdrant storage, RAG-based answers, source text, filename,
            page number, similarity score, and frontend source display.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://github.com/deoxys26/lexintel"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-sm hover:bg-slate-700"
            >
              View LexIntel Repo
            </a>
            <a
              href="https://github.com/deoxys26/lexintel/tree/main/docs"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm hover:border-slate-900"
            >
              View Full Case Study
            </a>
          </div>
        </div>
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
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <SectionLabel>Interactive Feature</SectionLabel>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Ask Phani&apos;s Portfolio AI
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A recruiter-friendly chatbot-style section that quickly explains my
              fit, projects, and skills.
            </p>
          </div>

          <button
            onClick={clearChat}
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm hover:border-slate-900"
          >
            Clear Chat
          </button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">Quick Questions</h3>
            <div className="mt-5 space-y-3">
              {Object.entries(botAnswers).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => askBot(key)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 shadow-sm transition hover:border-slate-900 hover:text-slate-950"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="h-3 w-3 rounded-full bg-slate-900"></div>
              <p className="text-sm font-semibold text-slate-700">
                Portfolio Assistant Online
              </p>
            </div>

            <div className="max-h-[430px] space-y-4 overflow-y-auto pr-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-white text-slate-700"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-500">
              Current version: frontend-only chatbot with predefined answers.
              Later, this can be upgraded to a real AI chatbot using a backend.
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
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <SectionLabel>Resume</SectionLabel>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          Internship-ready profile
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600">
          My resume focuses on GenAI, NLP, Computer Vision, FastAPI, React, and
          AI project development. I am open to remote internships where I can work
          on real AI applications.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/deoxys26"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-sm hover:bg-slate-700"
          >
            GitHub Profile
          </a>
          <a
            href="https://leetcode.com/u/deoxys123/"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm hover:border-slate-900"
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
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          Open to remote internships
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Interested in AI/ML Intern, GenAI Intern, Python Backend Intern, Data
          Analyst Intern, and Computer Vision Intern roles.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:phani262005@gmail.com"
            className="rounded-2xl bg-slate-900 px-6 py-3 font-bold text-white shadow-sm hover:bg-slate-700"
          >
            Email Me
          </a>
          <a
            href="https://github.com/deoxys26"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 shadow-sm hover:border-slate-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;