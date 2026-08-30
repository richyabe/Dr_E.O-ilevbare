/* Dr. Oluwatosin (Tosin) Sanusi Ilevbare — portfolio interactions & content */

/* ---------------- Data ---------------- */
const highlights = [
  { icon: "scroll-text", label: "PhD Psychology", sub: "Behavioural science specialisation" },
  { icon: "briefcase", label: "Senior Lecturer & Director", sub: "Entrepreneurship Skills & Innovation Centre" },
  { icon: "microscope", label: "Applied Research", sub: "NACETEM, NISER & MacArthur Foundation" },
  { icon: "globe", label: "National Development", sub: "Policy, health & sustainability" },
];

const education = [
  { icon: "graduation-cap", title: "PhD, Psychology", sub: "Behavioural science research" },
  { icon: "book-open", title: "MSc, Psychology", sub: "Obafemi Awolowo University" },
  { icon: "users", title: "BSc, Psychology", sub: "Obafemi Awolowo University" },
];

const researchThemes = [
  { icon: "brain", title: "Behavioural Science", text: "How attitudes, decisions, motivations and social environments shape human behaviour — and how those insights can be designed into interventions." },
  { icon: "heart-pulse", title: "Health Psychology", text: "The psychological and social factors behind health decisions, with a focus on cervical cancer screening uptake among Nigerian women." },
  { icon: "rocket", title: "Entrepreneurship", text: "Entrepreneurial intention, risk-taking and social support — what moves undergraduates and informal-sector actors toward enterprise." },
  { icon: "lightbulb", title: "Innovation Management", text: "Why people and organisations adopt or reject new ideas and technologies, and what drives innovation performance." },
  { icon: "leaf", title: "Indigenous Technology & Sustainability", text: "Documenting, validating and integrating Nigerian indigenous knowledge into sustainable development." },
  { icon: "landmark", title: "Public Policy & Behaviour Change", text: "Applying behavioural insights to governance, institutional integrity and anti-corruption through the NISER Actualising Behaviour Change series." },
];

const publications = [
  { tag: "Health Psychology", title: "Drivers of cervical cancer screening uptake in Ibadan, Nigeria", meta: "Ilevbare, O. E., Adegoke, A. A. & Adelowo, C. M. — Heliyon, 2020", href: "https://doi.org/10.1016/j.heliyon.2020.e03505" },
  { tag: "Health Behaviour", title: "Adopting innovative approaches to cervical cancer screening among women in developing countries: evidence from Nigeria", meta: "Ilevbare, O. E., Adegoke, A. A. & Onifade, O. J. — Int. J. Behav. & Healthcare Res., 2018", href: "https://doi.org/10.1504/ijbhr.2018.101576" },
  { tag: "Mental Health", title: "COVID-19 lockdown and psychological distress: how Nigerians fared", meta: "Ilevbare, O. E., Adelowo, C. M. & Adegbite, W. M. — Int. J. Behav. & Healthcare Res., 2020", href: "https://doi.org/10.1504/ijbhr.2020.112201" },
  { tag: "Public Health", title: "Awareness and Knowledge of Coronavirus Pandemic as Correlates of Psychological Distress During the COVID-19 Lockdown: A Nigerian Perspective", meta: "Ilevbare, O., Adelowo, C. M. & Adegbite, W. — SSRN, 2020", href: "https://doi.org/10.2139/ssrn.3624271" },
  { tag: "Food Security", title: "Social assistance and food security during covid-19 pandemic lock-down: insights from Nigeria", meta: "Ayo-Lawal, R. A., Ilevbare, O. E., Omotoso, K. O., Omimakinde, E. A. & Ukwuoma, O. — Future of Food, 2022", href: "https://doi.org/10.17170/kobra-202110144902" },
  { tag: "Entrepreneurship", title: "Do entrepreneurial characteristics and education influence start-up potentials among undergraduates? Evidence from a developing country", meta: "Adelowo, C. M., Ilevbare, O. E. & Surujlal, J. — Int. Entrepreneurship Rev., 2021", href: "https://doi.org/10.15678/IER.2021.0703.06" },
  { tag: "Innovation Management", title: "Determinants of Innovation performance among informal firms: empirical evidence from Nigeria", meta: "Ilevbare, O. E. & Akindimeji, D. O. — Int. J. Technological Learning, Innovation & Development, 2026", href: "https://doi.org/10.1504/ijtlid.2026.152369" },
  { tag: "Research Policy", title: "Collaboration, networking and research productivity in Nigeria's research institutes: empirical evidence", meta: "International Journal of Business Reflections, 2022", href: "https://doi.org/10.56249/ijbr.03.01.32" },
  { tag: "Sustainability", title: "Transition to Low-Carbon Future in Nigeria: The Role of Pro-Environmental Behaviors", meta: "Ilevbare, O. E., Sanni, M., Ilevbare, F. M. & Ali, G. A. — Handbook of Climate Change Adaptation, 2015", href: "https://doi.org/10.1007/978-3-642-38670-1_110" },
  { tag: "Climate Resilience", title: "Strengthening Climate Change Adaptation in the Cities of West Africa: Policy Implications for Urban Resilience", meta: "Sanni, M., Jalloh, A., Diouf, A., Atoyebi, M. K., Ilevbare, O. E. & Olotu, S. J. — Handbook of Climate Change Resilience, 2019/2020", href: "https://doi.org/10.1007/978-3-319-93336-8_138" },
  { tag: "Energy Behaviour", title: "A descriptive analysis of public understanding and attitudes of renewable energy resources towards energy access and development in Nigeria", meta: "Adepoju, A. O., Ilevbare, O. E., Ogundari, I. O. & Akinwale, Y. O. — Int. J. Energy Econ. & Policy, 2014", href: "https://www.econjournals.com/index.php/ijeep/article/view/909" },
  { tag: "Waste Behaviour", title: "Interaction of Psychological Variables on Residents Attitude towards Solid Waste Management in an Urban Centre of Nigeria", meta: "Ilevbare, F. M., Ilevbare, O. O. & Olabimitan, B. A. — J. Environ. & Earth Sci., 2014", href: "https://www.iiste.org/Journals/index.php/JEES/article/view/16640" },
  { tag: "Substance Abuse", title: "Empirical Pathways and Drivers of Substance Abuse in Osun State, Nigeria: Insights from Survivors in a Rehabilitation Home", meta: "Ilevbare, O. E., Yusuf, T. A., Obawole, A., Ilufoye, A. J. & Adewole, M. A. — J. Arts & Sociological Res., 2026", href: "https://doi.org/10.70382/ajasr.v11i6.092" },
];

const timeline = [
  { stage: "01", title: "Psychology Training", org: "Obafemi Awolowo University, Ile-Ife", text: "Academic foundation in Psychology — human behaviour, research methods, psychological theory and decision-making." },
  { stage: "02", title: "Doctoral Research", org: "PhD, Psychology", text: "Specialised applied research at the intersection of behavioural science and real-world national-development challenges." },
  { stage: "03", title: "Research & Technology Management", org: "NACETEM — Research Officer", text: "Expanded into innovation, technology management, entrepreneurship and the validation of indigenous technologies for sustainable development." },
  { stage: "04", title: "Behavioural Insights & Public Policy", org: "NISER · Actualising Behaviour Change (MacArthur Foundation)", text: "Behavioural-change research on governance, public institutions and anti-corruption strategies." },
  { stage: "05", title: "Academic Leadership", org: "University of Ilesa, Osun State — Senior Lecturer & Director", text: "Teaching, research, mentorship and innovation leadership as Director of the Entrepreneurship Skills and Innovation Centre." },
];

/* ---------------- Helpers ---------------- */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icon = (name, cls = "") => `<i data-lucide="${name}" class="${cls}"></i>`;
const mount = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

/* ---------------- Render content ---------------- */
mount("highlights", highlights.map((h, i) => `
  <article class="reveal" style="transition-delay:${i * 80}ms">
    ${icon(h.icon)}
    <h3>${esc(h.label)}</h3>
    <p>${esc(h.sub)}</p>
  </article>`).join(""));

mount("education", education.map((e, i) => `
  <div class="reveal" style="transition-delay:${i * 90}ms">
    <article class="edge-card">${icon(e.icon)}<h3>${esc(e.title)}</h3><p>${esc(e.sub)}</p></article>
  </div>`).join(""));

mount("themes", researchThemes.map((t, i) => `
  <div class="reveal" style="transition-delay:${i * 80}ms">
    <article class="edge-card">${icon(t.icon)}<h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></article>
  </div>`).join(""));

mount("publications", publications.map((p, i) => `
  <div class="reveal" style="transition-delay:${Math.min(i, 6) * 60}ms">
    <a class="pub" href="${esc(p.href)}" target="_blank" rel="noopener noreferrer">
      <div>
        <span class="tag">${esc(p.tag)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.meta)}</p>
      </div>
      ${icon("arrow-up-right", "arrow")}
    </a>
  </div>`).join(""));

mount("timeline", timeline.map((t, i) => `
  <div class="reveal" style="transition-delay:${i * 80}ms">
    <article class="trow">
      <div class="stage">${esc(t.stage)}</div>
      <div>
        <h3>${esc(t.title)}</h3>
        <p class="org">${esc(t.org)}</p>
        <p>${esc(t.text)}</p>
      </div>
    </article>
  </div>`).join(""));

/* ---------------- Icons ---------------- */
if (window.lucide) window.lucide.createIcons();

/* ---------------- Scroll reveal ---------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------------- Scroll progress + back to top ---------------- */
const progress = document.getElementById("progress");
const toTop = document.getElementById("to-top");
const onScroll = () => {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  if (progress) progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------- Mobile menu ---------------- */
const menu = document.getElementById("mobile-menu");
document.getElementById("mobile-open")?.addEventListener("click", () => menu?.classList.add("open"));
document.getElementById("mobile-close")?.addEventListener("click", () => menu?.classList.remove("open"));
menu?.querySelectorAll("a").forEach((a, i) => {
  a.style.transitionDelay = `${i * 80}ms`;
  a.addEventListener("click", () => menu.classList.remove("open"));
});

/* ---------------- Active nav link ---------------- */
const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
document.querySelectorAll("[data-page]").forEach((link) => {
  if (link.dataset.page === page) link.classList.add("is-active");
});
