import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  lang?: string;
}

export function SEO({
  title = "Joad Yimel González Tovar | IT Engineer & Digital Strategist",
  description = "IT Engineer specialized in digital transformation, AI automation, web development, and strategic marketing. 4+ years of experience in Querétaro, Mexico.",
  keywords = "IT Engineer, Digital Strategist, Web Development, AI Automation, UX/UI Design, Digital Marketing, Querétaro, Mexico, Joad Yimel, Software Engineer, E-commerce",
  ogTitle,
  ogDescription,
  ogImage = "https://joadyimel.vercel.app/og-image.jpg",
  ogUrl = "https://joadyimel.vercel.app",
  twitterCard = "summary_large_image",
  lang = "en",
}: SEOProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Basic meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("author", "Joad Yimel González Tovar");
    setMetaTag("robots", "index, follow");
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph
    setMetaTag("og:title", ogTitle || title, true);
    setMetaTag("og:description", ogDescription || description, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", ogUrl, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:locale", lang === "es" ? "es_MX" : "en_US", true);

    // Twitter Card
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", ogTitle || title);
    setMetaTag("twitter:description", ogDescription || description);
    setMetaTag("twitter:image", ogImage);

    // Additional SEO tags
    setMetaTag("theme-color", "#0D0D0D");
    setMetaTag("msapplication-TileColor", "#0D0D0D");

    // Language
    document.documentElement.setAttribute("lang", lang);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, lang]);

  return null;
}
