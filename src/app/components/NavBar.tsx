import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Languages, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function NavBar() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  const isPortfolioPage = location.pathname === "/portfolio";
  
  const scrollToSection = (sectionId: string) => {
    // Si estamos en la página de portfolio y queremos ir a una sección, primero volvemos al home
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "skills", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: language === "es" ? "Resumen" : "About" },
    { id: "experience", label: language === "es" ? "Experiencia" : "Experience" },
    { id: "skills", label: language === "es" ? "Habilidades" : "Skills" },
    { id: "education", label: language === "es" ? "Educación" : "Education" },
    { id: "contact", label: language === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 backdrop-blur-sm bg-[#0D0D0D]/80 border-b border-[#F0EDE6]/5"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center gap-4">
          {/* Logo - Left */}
          <div className="flex justify-start">
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-['Syne'] font-bold text-xl tracking-wider text-[#AAFF45] hover:scale-105 transition-transform"
            >
              JY
            </button>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative font-['DM_Mono'] text-sm tracking-wider transition-colors ${
                  activeSection === item.id && isHomePage
                    ? "text-[#AAFF45]"
                    : "text-[#F0EDE6]/60 hover:text-[#F0EDE6]"
                }`}
              >
                {item.label}
                {activeSection === item.id && isHomePage && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#AAFF45]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Side Actions - Right */}
          <div className="flex items-center justify-end gap-4">
            {/* Portfolio Button */}
            <button
              onClick={() => navigate("/portfolio")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border font-['DM_Mono'] text-sm font-medium transition-all ${
                isPortfolioPage
                  ? "bg-[#AAFF45] border-[#AAFF45] text-[#0D0D0D]"
                  : "bg-[#161616] border-[#AAFF45]/20 hover:border-[#AAFF45] text-[#F0EDE6] hover:shadow-[0_0_15px_rgba(170,255,69,0.2)]"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              {t("nav.work")}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-[#AAFF45]/20 hover:border-[#AAFF45] text-[#F0EDE6] font-['DM_Mono'] text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(170,255,69,0.2)]"
              aria-label="Change language"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase">{language === "en" ? "ES" : "EN"}</span>
            </button>
            
            {/* Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 rounded-full bg-[#AAFF45] text-[#0D0D0D] font-['DM_Mono'] text-sm font-medium hover:bg-[#AAFF45]/90 transition-all hover:shadow-[0_0_20px_rgba(170,255,69,0.4)]"
            >
              {t("nav.contact")}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            {/* Logo */}
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-['Syne'] font-bold text-xl tracking-wider text-[#AAFF45] hover:scale-105 transition-transform"
            >
              JY
            </button>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Portfolio Button */}
              <button
                onClick={() => navigate("/portfolio")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border font-['DM_Mono'] text-xs font-medium transition-all ${
                  isPortfolioPage
                    ? "bg-[#AAFF45] border-[#AAFF45] text-[#0D0D0D]"
                    : "bg-[#161616] border-[#AAFF45]/20 hover:border-[#AAFF45] text-[#F0EDE6]"
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t("nav.work")}</span>
              </button>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161616] border border-[#AAFF45]/20 hover:border-[#AAFF45] text-[#F0EDE6] font-['DM_Mono'] text-xs font-medium transition-all"
                aria-label="Change language"
              >
                <Languages className="w-3.5 h-3.5" />
                <span className="uppercase">{language === "en" ? "ES" : "EN"}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Pills - Only show on home page */}
          {isHomePage && (
            <div className="flex items-center justify-start gap-3 overflow-x-auto pb-2 hide-scrollbar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-['DM_Mono'] text-xs tracking-wider whitespace-nowrap px-3 py-1.5 rounded-full transition-all ${
                    activeSection === item.id
                      ? "text-[#0D0D0D] bg-[#AAFF45]"
                      : "text-[#F0EDE6]/60 hover:text-[#F0EDE6] border border-[#F0EDE6]/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}