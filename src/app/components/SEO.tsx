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
  ogImage = "https://joadyimel.vercel.app/og-image.png",
  ogUrl = "https://joadyimel.vercel.app",
  twitterCard = "summary_large_image",
  lang = "en",
}: SEOProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Remove existing link tags for dynamic ones
    const removeLinks = (rel) => {
      document.querySelectorAll(`link[rel="${rel}"]`).forEach(el => el.remove());
    };

    // Favicon SVG (modern browsers)
    removeLinks("icon");
    const faviconSvg = document.createElement("link");
    faviconSvg.rel = "icon";
    faviconSvg.type = "image/svg+xml";
    faviconSvg.href = "/favicon.svg";
    document.head.appendChild(faviconSvg);

    // ICO for older browsers
    const faviconIco = document.createElement("link");
    faviconIco.rel = "alternate icon";
    faviconIco.type = "image/x-icon";
    faviconIco.href = "/favicon.ico";
    document.head.appendChild(faviconIco);

    // Apple touch icon
    const appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.sizes = "180x180";
    appleTouchIcon.href = "/apple-touch-icon.png";
    document.head.appendChild(appleTouchIcon);

    // PWA manifest
    const manifest = document.createElement("link");
    manifest.rel = "manifest";
    manifest.href = "/manifest.json";
    document.head.appendChild(manifest);

    // Set or update meta tags
    const setMetaTag = (name, content, property = false) => {
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
    setMetaTag("og:site_name", "Joad Yimel Portfolio", true);

    // Twitter Card
    setMetaTag("twitter:card", twitterCard);
    setMetaTag("twitter:title", ogTitle || title);
    setMetaTag("twitter:description", ogDescription || description);
    setMetaTag("twitter:image", ogImage);
    setMetaTag("twitter:image:alt", "Joad Yimel González Tovar - Portfolio");

    // Theme colors
    setMetaTag("theme-color", "#0D0D0D");
    setMetaTag("msapplication-TileColor", "#0D0D0D");

    // Language
    document.documentElement.setAttribute("lang", lang);
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, twitterCard, lang]);

  return null;
}
