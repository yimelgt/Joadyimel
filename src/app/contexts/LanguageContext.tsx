import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Nav
    "nav.contact": "CONTACT",
    
    // Hero
    "hero.role": "DIGITAL STRATEGIST · CREATIVE TECHNOLOGIST",
    "hero.subtitle": "Transforming business operations through intelligent automation, AI integration, and strategic digital solutions.",
    "hero.marquee": "QUERÉTARO · MEXICO · OPEN TO WORK · 4+ YEARS EXP",
    
    // About
    "about.title": "ABOUT",
    "about.quote": "\"30% reduction in operational workload through AI and intelligent automation.\"",
    "about.description": "IT Engineer specialized in digital transformation, web development, and strategic marketing. Experience leading AI automation projects, UX/UI design, and managing multi-platform advertising campaigns. Passionate about optimizing processes, creating memorable digital experiences, and scaling operations through cutting-edge technology.",
    
    // Experience
    "experience.title": "EXPERIENCE",
    "experience.carlsjr.role": "Marketing & Content Specialist",
    "experience.carlsjr.period": "Sep 2023 – Present",
    "experience.carlsjr.stat1": "Branches",
    "experience.carlsjr.stat2": "Less workload",
    "experience.carlsjr.stat3": "Saved/week",
    "experience.caamth.role": "Web Support Assistant & Digital Transformation",
    "experience.caamth.period": "Feb 2020 – May 2023",
    "experience.caamth.stat1": "Adoption",
    "experience.caamth.stat2": "Digital assets",
    "experience.caamth.stat3": "Web projects",
    
    // Skills
    "skills.title": "SKILLS",
    "skills.devStack": "Dev Stack",
    "skills.creative": "Creative",
    "skills.strategy": "Strategy",
    "skills.tools": "Tools",
    
    // Education
    "education.title": "EDUCATION & AWARDS",
    "education.degree1": "Information Technology Engineering",
    "education.degree2": "Associate Degree in E-commerce & Multimedia",
    "education.institution": "Universidad Tecnológica de la Zona Metropolitana del Valle de México",
    "education.award1": "Local Top 9",
    "education.award1.sub": "Huawei ICT Competition · 2023",
    "education.award2": "1st Place National",
    "education.award2.sub": "Video Game Creation · 2022",
    "education.award3": "National Top 25",
    "education.award3.sub": "IPMA Competition · 2021",
    "education.award4": "Professional Certifications/Courses",
    "education.award4.sub": "Fundamentos para la Innovación en la Industria 4.0 · Culture and Intensive English Program",
    
    // Contact
    "contact.title": "LET'S BUILD\nSOMETHING",
    
    // Tags
    "tag.metaAds": "Meta Ads",
    "tag.aiAutomation": "AI Automation",
    "tag.dmb": "DMB",
    "tag.uxui": "UX/UI",
    "tag.seo": "SEO",
    "tag.ecommerce": "E-commerce",
    "tag.branding": "Branding",
    "tag.cms": "CMS",
    "tag.digitalMigration": "Digital Migration",
    "tag.graphicDesign": "Graphic Design",
    "tag.joomla": "Joomla",
    "tag.techSupport": "Technical Support",
    "tag.training": "Training",
    "tag.digitalMarketing": "Digital Marketing",
    "tag.aiTools": "AI Tools",
    "tag.dam": "DAM",
    "tag.agileMethods": "Agile Methods",
  },
  es: {
    // Nav
    "nav.contact": "CONTACTO",
    
    // Hero
    "hero.role": "ESTRATEGA DIGITAL · TECNÓLOGO CREATIVO",
    "hero.subtitle": "Transformando operaciones empresariales mediante automatización inteligente, integración de IA y soluciones digitales estratégicas.",
    "hero.marquee": "QUERÉTARO · MÉXICO · DISPONIBLE · 4+ AÑOS EXP",
    
    // About
    "about.title": "RESUMEN",
    "about.quote": "\"Reducción del 30% en carga operativa mediante IA y automatización inteligente.\"",
    "about.description": "Ingeniero en TI especializado en transformación digital, desarrollo web y marketing estratégico. Experiencia liderando proyectos de automatización con IA, diseño UX/UI y gestión de campañas publicitarias multiplataforma. Pasión por optimizar procesos, crear experiencias digitales memorables y escalar operaciones mediante tecnología de vanguardia.",
    
    // Experience
    "experience.title": "EXPERIENCIA",
    "experience.carlsjr.role": "Especialista en Marketing y Contenido",
    "experience.carlsjr.period": "Sep 2023 – Presente",
    "experience.carlsjr.stat1": "Sucursales",
    "experience.carlsjr.stat2": "Menos carga",
    "experience.carlsjr.stat3": "Ahorradas/sem",
    "experience.caamth.role": "Auxiliar Soporte Web & Transformación Digital",
    "experience.caamth.period": "Feb 2020 – May 2023",
    "experience.caamth.stat1": "Adopción",
    "experience.caamth.stat2": "Activos digitales",
    "experience.caamth.stat3": "Proyectos web",
    
    // Skills
    "skills.title": "HABILIDADES",
    "skills.devStack": "Dev Stack",
    "skills.creative": "Creatividad",
    "skills.strategy": "Estrategia",
    "skills.tools": "Herramientas",
    
    // Education
    "education.title": "EDUCACIÓN & RECONOCIMIENTOS",
    "education.degree1": "Ingeniería en Tecnologías de la Información",
    "education.degree2": "Técnico Superior Universitario en E-commerce & Multimedia",
    "education.institution": "Universidad Tecnológica de la Zona Metropolitana del Valle de México",
    "education.award1": "Top 9 Nacional",
    "education.award1.sub": "Huawei ICT Competition · 2023",
    "education.award2": "1er Lugar Local",
    "education.award2.sub": "Creación de Videojuegos · 2022",
    "education.award3": "Top 25 Nacional",
    "education.award3.sub": "IPMA Competition · 2021",
    "education.award4": "Certificaciones/Cursos Profesionales",
    "education.award4.sub": "Fundamentos para la Innovación en la Industria 4.0 · Culture and Intensive English Program",
    
    // Contact
    "contact.title": "CONSTRUYAMOS\nALGO",
    
    // Tags
    "tag.metaAds": "Meta Ads",
    "tag.aiAutomation": "IA Automatización",
    "tag.dmb": "DMB",
    "tag.uxui": "UX/UI",
    "tag.seo": "SEO",
    "tag.ecommerce": "E-commerce",
    "tag.branding": "Branding",
    "tag.cms": "CMS",
    "tag.digitalMigration": "Migración Digital",
    "tag.graphicDesign": "Diseño Gráfico",
    "tag.joomla": "Joomla",
    "tag.techSupport": "Soporte Técnico",
    "tag.training": "Capacitación",
    "tag.digitalMarketing": "Marketing Digital",
    "tag.aiTools": "Herramientas IA",
    "tag.dam": "DAM",
    "tag.agileMethods": "Metodologías Ágiles",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "es") {
      return saved;
    }
    // Then check browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("es") ? "es" : "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
