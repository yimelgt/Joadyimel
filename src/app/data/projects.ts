// 🎨 CONFIGURACIÓN DE PROYECTOS
// Solo actualiza las URLs de las imágenes y la información aquí

export interface Project {
  id: string;
  title: {
    en: string;
    es: string;
  };
  category: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  imageUrl: string; // 👈 ACTUALIZA ESTA URL
  tags: string[];
  link?: string; // URL opcional del proyecto
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: {
      en: "Carl's Jr. Digital Campaign",
      es: "Campaña Digital Carl's Jr.",
    },
    category: {
      en: "Digital Marketing & Social Media",
      es: "Marketing Digital y Redes Sociales",
    },
    description: {
      en: "Comprehensive digital strategy and social media management achieving 100% digital adoption across all branches",
      es: "Estrategia digital integral y gestión de redes sociales logrando 100% adopción digital en todas las sucursales",
    },
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", // 👈 CAMBIA ESTA URL
    tags: ["Meta Ads", "Branding", "Social Media", "Content Creation"],
    link: "https://example.com",
  },
  {
    id: "project-2",
    title: {
      en: "E-commerce Platform Redesign",
      es: "Rediseño Plataforma E-commerce",
    },
    category: {
      en: "Web Development",
      es: "Desarrollo Web",
    },
    description: {
      en: "Complete UX/UI overhaul resulting in 30% conversion increase",
      es: "Renovación completa UX/UI resultando en 30% incremento de conversión",
    },
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80", // 👈 CAMBIA ESTA URL
    tags: ["UX/UI", "E-commerce", "Figma"],
  },
  {
    id: "project-3",
    title: {
      en: "AI Automation & Operations Support",
      es: "Automatización IA y Apoyo Operativo",
    },
    category: {
      en: "Automation & Operations",
      es: "Automatización y Operaciones",
    },
    description: {
      en: "Custom AI tools reducing 30% operational workload, graphic material support, and assistance in new branch openings",
      es: "Herramientas IA personalizadas reduciendo 30% carga operativa, apoyo con material gráfico y asistencia en apertura de nuevas sucursales",
    },
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", // 👈 CAMBIA ESTA URL
    tags: ["AI", "Automation", "Graphic Design", "Operations"],
  },
  {
    id: "project-4",
    title: {
      en: "Brand Identity Design",
      es: "Diseño Identidad Corporativa",
    },
    category: {
      en: "Branding",
      es: "Branding",
    },
    description: {
      en: "Complete visual identity including logo, guidelines, and collateral",
      es: "Identidad visual completa incluyendo logo, guías y material",
    },
    imageUrl: "https://drive.google.com/file/d/1PyzjwZ-o65yPxHrEiDNe7B4r_wkkH87P/view?usp=sharing", // 👈 CAMBIA ESTA URL
    tags: ["Branding", "Design", "Illustrator"],
  },
  {
    id: "project-5",
    title: {
      en: "CMS Migration Project",
      es: "Proyecto Migración CMS",
    },
    category: {
      en: "Web Development",
      es: "Desarrollo Web",
    },
    description: {
      en: "Digital transformation achieving 80% process efficiency",
      es: "Transformación digital logrando 80% eficiencia de procesos",
    },
    imageUrl: "https://drive.google.com/file/d/1qq_Fxw3TGCvjizpPnRlYe8vsfkttQ2x4/view?usp=drive_link", // 👈 CAMBIA ESTA URL
    tags: ["CMS", "MagicInfo", "Migration"],
  },
  {
    id: "project-6",
    title: {
      en: "SEO Optimization Strategy",
      es: "Estrategia Optimización SEO",
    },
    category: {
      en: "Digital Strategy",
      es: "Estrategia Digital",
    },
    description: {
      en: "Technical SEO implementation boosting organic traffic",
      es: "Implementación SEO técnico aumentando tráfico orgánico",
    },
    imageUrl: "https://drive.google.com/file/d/19vRo45mGRvg_zviLdpONF01D7bz6oo-N/view?usp=drive_link", // 👈 CAMBIA ESTA URL
    tags: ["SEO", "Analytics", "Strategy"],
  },
];
