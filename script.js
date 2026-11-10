const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const languageToggle = document.querySelector(".language-toggle");
const themeToggle = document.querySelector(".theme-toggle");

const translations = {
  pt: {
    "page-title": "Mell Peçanha — Desenvolvimento Full Stack", "page-description": "Portfólio de Mell Peçanha, desenvolvedora Full Stack com foco em TypeScript, Node.js e APIs REST.",
    "nav-label": "Navegação principal", "nav-about": "sobre", "nav-projects": "projetos", "nav-contact": "contato",
    "hero-eyebrow": "Mell Peçanha · dev full stack", "hero-title": "desenvolvimento<br /><strong>Full Stack.</strong>", "hero-intro": "Desenvolvedora com foco em backend, experiência em APIs REST, regras de negócio, autenticação e aplicações web de ponta a ponta.", "hero-cta": "conheça meus projetos",
    "about-eyebrow": "sobre", "about-title": "Oi, eu sou<br /><em>a Mell.</em>", "about-copy-1": "Trabalho do backend à interface: APIs REST, autenticação, bancos relacionais e regras de negócio bem definidas.", "about-copy-2": "Atualmente, aprofundo meus estudos em Inteligência Artificial na UNIVESP e em Full Stack Development na FIAP.", "about-cta": "ver projetos",
    "projects-eyebrow": "Projetos em destaque", "projects-note": "Aplicações Full Stack, da regra de negócio ao deploy.", "project-link": "ver projeto ↗", "code-link": "ver código ↗",
    "cinevo-copy": "Plataforma para consultar filmes e sessões, comprar ingressos e reservar assentos com controle de disponibilidade.",
    "resolve-copy": "Plataforma para registrar, priorizar e acompanhar ocorrências, responsáveis, comentários e todo o histórico.",
    "lab-copy": "Aplicação em desenvolvimento para análise informativa de exames, com recuperação de informações e Machine Learning.",
    "contact-eyebrow": "04 · contato", "contact-title": "aberta a novas<br /><strong>oportunidades.</strong>", "contact-note": "Ficou interessada no meu trabalho? Entre em contato.", "back-top": "voltar ao topo ↑"
  },
  en: {
    "page-title": "Mell Peçanha — Full Stack Development", "page-description": "Mell Peçanha's portfolio, a Full Stack developer focused on TypeScript, Node.js and REST APIs.",
    "nav-label": "Main navigation", "nav-about": "about", "nav-projects": "projects", "nav-contact": "contact",
    "hero-eyebrow": "Mell Peçanha · full stack developer", "hero-title": "Full Stack<br /><strong>development.</strong>", "hero-intro": "A developer with a backend focus and experience in REST APIs, business rules, authentication and end-to-end web applications.", "hero-cta": "explore my projects",
    "about-eyebrow": "The person behind it", "about-title": "Hi, I am<br /><em>Mell.</em>", "about-copy-1": "I work from backend to interface: REST APIs, authentication, relational databases and well-defined business rules.", "about-copy-2": "I am currently expanding my studies in Artificial Intelligence at UNIVESP and Full Stack Development at FIAP.", "about-cta": "view projects",
    "projects-eyebrow": "Featured projects", "projects-note": "Full Stack applications, from business rules to deployment.", "project-link": "view project ↗", "code-link": "view code ↗",
    "cinevo-copy": "A platform to browse movies and screenings, buy tickets and reserve seats with availability control.",
    "resolve-copy": "A platform to register, prioritize and track incidents, assignees, comments and full history.",
    "lab-copy": "An application in development for informative exam analysis, using information retrieval and Machine Learning.",
    "contact-eyebrow": "04 · contact", "contact-title": "open to new<br /><strong>opportunities.</strong>", "contact-note": "Interested in my work? Get in touch.", "back-top": "back to top ↑"
  }
};

const setLanguage = (language) => {
  document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  document.title = translations[language]["page-title"];
  document.querySelector('meta[name="description"]').setAttribute("content", translations[language]["page-description"]);
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = translations[language][element.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = translations[language][element.dataset.i18nHtml]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", translations[language][element.dataset.i18nAria]); });
  languageToggle.textContent = language === "pt" ? "EN" : "PT";
  languageToggle.setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
  localStorage.setItem("portfolio-language", language);
};

const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
  localStorage.setItem("portfolio-theme", theme);
};

setLanguage(localStorage.getItem("portfolio-language") || "pt");
setTheme(localStorage.getItem("portfolio-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

languageToggle.addEventListener("click", () => setLanguage(document.documentElement.lang === "en" ? "pt" : "en"));
themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

menuButton.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
  });
});
