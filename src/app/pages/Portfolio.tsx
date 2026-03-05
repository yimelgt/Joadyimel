import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";
import { SEO } from "../components/SEO";
import { NavBar } from "../components/NavBar";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Portfolio() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const seoTitle =
    language === "es"
      ? "Trabajos | Joad Yimel González Tovar"
      : "Works | Joad Yimel González Tovar";

  const seoDescription =
    language === "es"
      ? "Ejemplos de proyectos en transformación digital, automatización con IA, desarrollo web y marketing estratégico."
      : "Project examples in digital transformation, AI automation, web development, and strategic marketing.";

  const pageTitle = language === "es" ? "Trabajos" : "Works";
  const pageSubtitle =
    language === "es"
      ? "Ejemplos de trabajos"
      : "Work examples";
  const backButton = language === "es" ? "Volver al CV" : "Back to CV";

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords="portfolio, projects, digital transformation, web development"
        lang={language}
      />

      <div className="bg-[#0D0D0D] min-h-screen relative overflow-x-hidden">
        {/* Noise Texture Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <NavBar />

        {/* Back Button - Alternative (optional, puede quitarse si el NavBar es suficiente) */}
        <div className="fixed top-6 left-6 md:left-12 z-40 lg:hidden">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-4 py-2 bg-[#161616]/80 backdrop-blur-sm border border-[#AAFF45]/20 hover:border-[#AAFF45] rounded-full font-['DM_Mono'] text-[#F0EDE6] text-sm hover:text-[#AAFF45] transition-all hover:shadow-[0_0_15px_rgba(170,255,69,0.2)]"
          >
            <ArrowLeft className="w-4 h-4" />
            {backButton}
          </motion.button>
        </div>

        {/* HERO SECTION */}
        <section className="min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Page Title */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="font-['Syne'] font-bold text-[#F0EDE6] text-[4rem] leading-[0.9] sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] sm:leading-[0.85] tracking-tight uppercase">
                {pageTitle}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-['DM_Mono'] text-[#AAFF45] text-base sm:text-lg md:text-xl tracking-wider max-w-2xl"
            >
              {pageSubtitle}
            </motion.p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#F0EDE6]/10 py-6 sm:py-8 px-4 sm:px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
              <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-[0.65rem] sm:text-xs">
                JOAD YIMEL GONZÁLEZ TOVAR © 2026
              </p>
              <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-[0.65rem] sm:text-xs">
                QUERÉTARO · MÉXICO
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
