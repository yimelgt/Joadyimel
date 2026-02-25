import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function StructuredData() {
  const { language } = useLanguage();

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Joad Yimel González Tovar",
      jobTitle:
        language === "es"
          ? "Ingeniero en TI y Estratega Digital"
          : "IT Engineer & Digital Strategist",
      description:
        language === "es"
          ? "Ingeniero en TI especializado en transformación digital, automatización con IA, desarrollo web y marketing estratégico."
          : "IT Engineer specialized in digital transformation, AI automation, web development, and strategic marketing.",
      url: "https://joadyimel.vercel.app",
      email: "joadyimel@gmail.com",
      telephone: "+527791064897",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Querétaro",
        addressRegion: "Querétaro",
        addressCountry: "MX",
      },
      sameAs: [
        "https://www.linkedin.com/in/joad-yimel-gonzález-tovar-8a4a19233/",
        "https://joadyimel.vercel.app",
      ],
      knowsAbout: [
        "Web Development",
        "Digital Transformation",
        "AI Automation",
        "UX/UI Design",
        "Digital Marketing",
        "E-commerce",
        "SEO",
        "Meta Ads",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name:
          language === "es"
            ? "Universidad Tecnológica de la Zona Metropolitana del Valle de México"
            : "Technological University of the Metropolitan Area of the Valley of Mexico",
      },
      award: [
        "Huawei ICT Competition - National Top 9",
        "Video Game Creation - 1st Place National",
        "IPMA Certification - National Top 25",
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = "structured-data";

    // Remove existing structured data if any
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [language]);

  return null;
}
