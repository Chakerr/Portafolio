/* =========================================
   Simple i18n toggle (ES ↔ EN)
   ========================================= */

(() => {
  /* --- Diccionario --- */
  const i18n = {
    es: {
      "hero.title": "Hola, soy Luis 👋",
      "hero.desc":
        "Desarrollador de software con fuerte dominio en <b>Java, HTML, CSS y JavaScript</b>, enfocado en crear soluciones innovadoras, eficientes y escalables.",
      "about.title": "Sobre mí 👨‍🚀",
      "about.text":
        "Con enfoque en desarrollo web, busco oportunidades para aplicar mi experiencia construyendo aplicaciones robustas. Me mantengo a la vanguardia de las tecnologías emergentes y desarrollo software de alto impacto que mejora la productividad y la experiencia de usuario.",
      "skills.title": "Lenguajes y herramientas",
      "projects.title": "Proyectos",
      "high.title": "Logros de impacto",
      "resume.title": "Experiencia y educación",
      "contact.title": "Conecta conmigo 🚀",
      /*  ➜ Añade el resto de claves… */
    },
    en: {
      "hero.title": "Hi, I'm Luis 👋",
      "hero.desc":
        "Software developer with strong skills in <b>Java, HTML, CSS and JavaScript</b>, focused on building innovative, efficient and scalable solutions.",
      "about.title": "About me 👨‍🚀",
      "about.text":
        "Web-oriented developer seeking opportunities to build robust applications. I keep up with emerging tech and create high-impact software that boosts productivity and UX.",
      "skills.title": "Languages & Tools",
      "projects.title": "Projects",
      "high.title": "Impact Highlights",
      "resume.title": "Experience & Education",
      "contact.title": "Connect with me 🚀",
      /*  ➜ Añade el resto de claves… */
    },
  };

  /* --- Render según idioma --- */
  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      el.innerHTML = i18n[lang][key] || key;
    });
    localStorage.setItem("lang", lang);
    document.getElementById("lang-toggle").textContent =
      lang === "es" ? "EN" : "ES";
  }

  /* --- Evento toggle --- */
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("lang-toggle");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const next = document.documentElement.lang === "es" ? "en" : "es";
      setLang(next);
    });

    /* Arrancar con preferencia previa o ES */
    setLang(localStorage.getItem("lang") || "es");
  });
})();
