// 🎨 CONFIGURACIÓN DE PROYECTOS
// Solo actualiza las URLs de las imágenes y la información aquí

// Importar imágenes del proyecto desde assets
import { projectImages } from "../../assets/project-images";

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
    imageUrl: projectImages.carlsjrApertura, // ✅ Imagen de Gran Apertura
    tags: ["Meta Ads", "Branding", "Social Media", "Content Creation"],
    link: "https://example.com",
  },
  {
    id: "project-2",
    title: {
      en: "Digital Menu Board CMS Implementation",
      es: "Implementación CMS para Menú Board Digital",
    },
    category: {
      en: "Web Development",
      es: "Desarrollo Web",
    },
    description: {
      en: "Custom CMS system for digital menu board management enabling real-time updates and content control",
      es: "Sistema CMS personalizado para administración de menú board digital permitiendo actualizaciones en tiempo real y control de contenido",
    },
    imageUrl: projectImages.dashboard, // ✅ Imagen de dashboard/menú board
    tags: ["CMS", "WordPress", "Digital Signage", "Backend"],
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
    imageUrl: "https://images.unsplash.com/photo-1621361753831-e972c09ceec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc3Mjc1NDcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", // ✅ Workspace minimalista con laptop
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
    imageUrl: projectImages.brandIdentity, // ✅ Imagen de identidad corporativa
    tags: ["Branding", "Design", "Illustrator"],
  },
  {
    id: "project-5",
    title: {
      en: "CAAMTH Digital Platform",
      es: "Plataforma Digital CAAMTH",
    },
    category: {
      en: "Web Development & Digital Transformation",
      es: "Desarrollo Web y Transformación Digital",
    },
    description: {
      en: "Water and Sewerage Commission digital platform achieving 80% process efficiency",
      es: "Plataforma digital de Comisión de Agua y Alcantarillado logrando 80% eficiencia de procesos",
    },
    imageUrl: projectImages.caamth, // ✅ Imagen interna
    tags: ["CMS", "Wordpress", "Digital Migration", "Web Development"],
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
    imageUrl: projectImages.carlsjr, // 👈 CAMBIA ESTA URL
    tags: ["SEO", "Analytics", "Strategy"],
  },
];