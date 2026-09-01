/* ===== Portfolio Data ===== */
const researchThemes = [
  { icon: "brain", title: "Behavioural Science", text: "How attitudes, decisions, motivations and social environments shape human behaviour — and how those insights can be designed into interventions." },
  { icon: "heart-pulse", title: "Health Psychology", text: "The psychological and social factors behind health decisions, with a focus on cervical cancer screening uptake among Nigerian women." },
  { icon: "rocket", title: "Entrepreneurship", text: "Entrepreneurial intention, risk-taking and social support — what moves undergraduates and informal-sector actors toward enterprise." },
  { icon: "lightbulb", title: "Innovation Management", text: "Why people and organisations adopt or reject new ideas and technologies, and what drives innovation performance." },
  { icon: "leaf", title: "Indigenous Technology & Sustainability", text: "Documenting, validating and integrating Nigerian indigenous knowledge into sustainable development." },
  { icon: "landmark", title: "Public Policy & Behaviour Change", text: "Applying behavioural insights to governance, institutional integrity and anti-corruption through the NISER Actualising Behaviour Change series." },
];

const publications = [
  { tag: "Health Psychology", title: "Drivers of cervical cancer screening uptake in Ibadan, Nigeria", themes: "Ilevbare, O. E., Adegoke, A. A. & Adelowo, C. M. — Heliyon, 2020", href: "https://doi.org/10.1016/j.heliyon.2020.e03505" },
  { tag: "Health Behaviour", title: "Adopting innovative approaches to cervical cancer screening among women in developing countries: evidence from Nigeria", themes: "Ilevbare, O. E., Adegoke, A. A. & Onifade, O. J. — Int. J. Behav. & Healthcare Res., 2018", href: "https://doi.org/10.1504/ijbhr.2018.101576" },
  { tag: "Mental Health", title: "COVID-19 lockdown and psychological distress: how Nigerians fared", themes: "Ilevbare, O. E., Adelowo, C. M. & Adegbite, W. M. — Int. J. Behav. & Healthcare Res., 2020", href: "https://doi.org/10.1504/ijbhr.2020.112201" },
  { tag: "Public Health", title: "Awareness and Knowledge of Coronavirus Pandemic as Correlates of Psychological Distress During the COVID-19 Lockdown: A Nigerian Perspective", themes: "Ilevbare, O., Adelowo, C. M. & Adegbite, W. — SSRN, 2020", href: "https://doi.org/10.2139/ssrn.3624271" },
  { tag: "Food Security", title: "Social assistance and food security during covid-19 pandemic lock-down: insights from Nigeria", themes: "Ayo-Lawal, R. A., Ilevbare, O. E., Omotoso, K. O., Omimakinde, E. A. & Ukwuoma, O. — Future of Food, 2022", href: "https://doi.org/10.17170/kobra-202110144902" },
  { tag: "Entrepreneurship", title: "Do entrepreneurial characteristics and education influence start-up potentials among undergraduates? Evidence from a developing country", themes: "Adelowo, C. M., Ilevbare, O. E. & Surujlal, J. — Int. Entrepreneurship Rev., 2021", href: "https://doi.org/10.15678/IER.2021.0703.06" },
  { tag: "Innovation Management", title: "Determinants of Innovation performance among informal firms: empirical evidence from Nigeria", themes: "Ilevbare, O. E. & Akindimeji, D. O. — Int. J. Technological Learning, Innovation & Development, 2026", href: "https://doi.org/10.1504/ijtlid.2026.152369" },
  { tag: "Research Policy", title: "Collaboration, networking and research productivity in Nigeria's research institutes: empirical evidence", themes: "International Journal of Business Reflections, 2022", href: "https://doi.org/10.56249/ijbr.03.01.32" },
  { tag: "Sustainability", title: "Transition to Low-Carbon Future in Nigeria: The Role of Pro-Environmental Behaviors", themes: "Ilevbare, O. E., Sanni, M., Ilevbare, F. M. & Ali, G. A. — Handbook of Climate Change Adaptation, 2015", href: "https://doi.org/10.1007/978-3-642-38670-1_110" },
  { tag: "Climate Resilience", title: "Strengthening Climate Change Adaptation in the Cities of West Africa: Policy Implications for Urban Resilience", themes: "Sanni, M., Jalloh, A., Diouf, A., Atoyebi, M. K., Ilevbare, O. E. & Olotu, S. J. — Handbook of Climate Change Resilience, 2019/2020", href: "https://doi.org/10.1007/978-3-319-93336-8_138" },
  { tag: "Energy Behaviour", title: "A descriptive analysis of public understanding and attitudes of renewable energy resources towards energy access and development in Nigeria", themes: "Adepoju, A. O., Ilevbare, O. E., Ogundari, I. O. & Akinwale, Y. O. — Int. J. Energy Econ. & Policy, 2014", href: "https://www.econjournals.com/index.php/ijeep/article/view/909" },
  { tag: "Waste Behaviour", title: "Interaction of Psychological Variables on Residents Attitude towards Solid Waste Management in an Urban Centre of Nigeria", themes: "Ilevbare, F. M., Ilevbare, O. O. & Olabimitan, B. A. — J. Environ. & Earth Sci., 2014", href: "https://www.iiste.org/Journals/index.php/JEES/article/view/16640" },
  { tag: "Substance Abuse", title: "Empirical Pathways and Drivers of Substance Abuse in Osun State, Nigeria: Insights from Survivors in a Rehabilitation Home", themes: "Ilevbare, O. E., Yusuf, T. A., Obawole, A., Ilufoye, A. J. & Adewole, M. A. — J. Arts & Sociological Res., 2026", href: "https://doi.org/10.70382/ajasr.v11i6.092" },
];

const timeline = [
  { stage: "01", title: "Psychology Training", org: "Obafemi Awolowo University, Ile-Ife", text: "Academic foundation in Psychology — human behaviour, research methods, psychological theory and decision-making." },
  { stage: "02", title: "Doctoral Research", org: "PhD, Psychology", text: "Specialised applied research at the intersection of behavioural science and real-world national-development challenges." },
  { stage: "03", title: "Research & Technology Management", org: "NACETEM — Research Officer", text: "Expanded into innovation, technology management, entrepreneurship and the validation of indigenous technologies for sustainable development." },
  { stage: "04", title: "Behavioural Insights & Public Policy", org: "NISER · Actualising Behaviour Change (MacArthur Foundation)", text: "Behavioural-change research on governance, public institutions and anti-corruption strategies." },
  { stage: "05", title: "Academic Leadership", org: "University of Ilesa, Osun State — Senior Lecturer & Director", text: "Senior Lecturer in the Department of Psychology and Director of the Entrepreneurial Skills and Innovation Centre, combining teaching, research, mentorship and innovation leadership." },
];

/* ===== Icon Helpers ===== */
function icon(name, cls = "") {
  const map = {
    "award": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m15.477 12.89 1.515 8.396a.5.5 0 0 1-.8.49l-3.478-2.47-3.478 2.47a.5.5 0 0 1-.8-.49l1.515-8.396"/><path d="M17 21h1a2 2 0 0 0 2-2v-5.6a2 2 0 0 0-1.2-1.832l-4.8-2.4a2 2 0 0 0-1.6 0l-4.8 2.4A2 2 0 0 0 6 13.4V19a2 2 0 0 0 2 2h1"/><circle cx="12" cy="7" r="4"/></svg>`,
    "brain": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M12 5V3"/><path d="M17 5a4 4 0 0 1 3.64 5.64A4 4 0 0 1 21 13.5V17a3 3 0 0 1-3 3v-2"/><path d="M4 13.5V17a3 3 0 0 0 3 3v-2"/><path d="M7 5a4 4 0 0 0-3.64 5.64A4 4 0 0 0 3 13.5"/><path d="m7 16.5-1.5-1.5"/><path d="m17 16.5 1.5-1.5"/><path d="M12 12v6"/><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9S3 7.03 3 12a9 9 0 0 0 9 9Z"/></svg>`,
    "heart-pulse": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>`,
    "rocket": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    "lightbulb": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M15 14c.2-1 .8-2.4 2-3.4a6.7 6.7 0 0 0-5.2-11.6 6.7 6.7 0 0 0-5.2 11.6c1.2 1 1.8 2.4 2 3.4"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
    "leaf": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    "landmark": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M8 21h8a2 2 0 0 0 2-2v-2H6v2a2 2 0 0 0 2 2Z"/><path d="M6 17h12"/><path d="m12 7 6 3-6 3-6-3 6-3"/><path d="M6 10v7"/><path d="M18 10v7"/></svg>`,
    "scroll-text": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M15 4V2"/><path d="M15 16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2Z"/><path d="M8 12h.01"/><path d="M21 12v5a2 2 0 0 1-2 2h-5"/><path d="M15 12h.01"/><path d="M3 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/><path d="M3 8v9a2 2 0 0 0 2 2h.5"/><path d="M3 8a2 2 0 0 1 2-2h.5"/><path d="M3 8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/></svg>`,
    "briefcase": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`,
    "microscope": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2.463 2.463 0 0 1-.017-4.517l-2.7-2.7A2.463 2.463 0 0 1 6.483 2.483l2.7 2.7A2.463 2.463 0 0 1 12 5.05"/><path d="M10.847 4.854 14.2 8.2"/><path d="m12 5.05.929-.93"/></svg>`,
    "globe": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    "graduation-cap": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 8.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16c0 .8.2 1.6.6 2.2 1 1.5 2.8 2.2 4.4 1.7"/><path d="M17.992 19.918A4.999 4.999 0 0 0 12 15v-3"/></svg>`,
    "book-open": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>`,
    "users": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    "building": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect width="16" height="20" x="4" y="2" rx="2"/></svg>`,
    "map-pin": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
    "arrow-right": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    "arrow-left": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    "arrow-up-right": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>`,
    "menu": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`,
    "x": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    "chevron-up": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="m18 15-6-6-6 6"/></svg>`,
    "linkedin": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    "mail": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    "message-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  };
  return map[name] || "";
}

/* ===== Render Helpers ===== */
function renderThemes() {
  const container = document.getElementById("themes-grid");
  if (!container) return;
  container.innerHTML = researchThemes.map((theme, i) => `
    <article class="research-tile reveal-stage" data-reveal>
      <span class="number">0${i + 1}</span>
      ${icon(theme.icon, "icon")}
      <h3>${theme.title}</h3>
      <p>${theme.text}</p>
    </article>
  `).join("");
}

function renderPublications() {
  const container = document.getElementById("publications-list");
  if (!container) return;
  container.innerHTML = publications.map((pub, i) => `
    <a href="${pub.href}" target="_blank" rel="noopener noreferrer" class="publication-row reveal-stage" data-reveal>
      <span class="number">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <span class="tag">${pub.tag}</span>
        <h3>${pub.title}</h3>
        <p class="themes">${pub.themes}</p>
      </div>
      ${icon("arrow-up-right", "arrow")}
    </a>
  `).join("");
}

function renderTimeline() {
  const container = document.getElementById("career-list");
  if (!container) return;
  container.innerHTML = timeline.map((item, i) => `
    <article class="career-row reveal-stage" data-reveal>
      <span class="stage">${item.stage}</span>
      <div>
        <h3>${item.title}</h3>
        <p class="org">${item.org}</p>
      </div>
      <p>${item.text}</p>
    </article>
  `).join("");
}

/* ===== Interactions ===== */
function initMobileMenu() {
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");
  const mobileNav = document.getElementById("mobile-nav");
  if (!openBtn || !closeBtn || !mobileNav) return;

  openBtn.addEventListener("click", () => mobileNav.classList.add("open"));
  closeBtn.addEventListener("click", () => mobileNav.classList.remove("open"));
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  const onScroll = () => {
    if (window.scrollY > 500) btn.classList.add("visible");
    else btn.classList.remove("visible");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
}

/* ===== Active Nav ===== */
function initActiveNav() {
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href").replace("./", "");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ===== Initialise ===== */
document.addEventListener("DOMContentLoaded", () => {
  renderThemes();
  renderPublications();
  renderTimeline();
  initMobileMenu();
  initScrollProgress();
  initBackToTop();
  initReveal();
  initActiveNav();
});
