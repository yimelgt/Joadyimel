import { useEffect } from "react";
import { motion } from "motion/react";
import { NavBar } from "./components/NavBar";
import { CustomCursor } from "./components/CustomCursor";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { ExperienceCard } from "./components/ExperienceCard";
import { SkillPill } from "./components/SkillPill";
import { AwardBadge } from "./components/AwardBadge";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

function AppContent() {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const skills = {
    devStack: ["HTML5", "CSS3", "JavaScript", "Figma",],
    creative: ["Adobe CC", "Illustrator", "Photoshop", "InDesign", "Canva"],
    strategy: [
      "SEO",
      "Meta Ads",
      "E-commerce",
      "UX/UI",
      "Branding",
      t("tag.digitalMarketing"),
    ],
    tools: [
      t("tag.aiTools"),
      "CMS",
      "DAM",
      t("tag.agileMethods"),
    ],
  };
  
  // SEO content
  const seoTitle =
    language === "es"
      ? "Joad Yimel González Tovar | Ingeniero en TI y Estratega Digital"
      : "Joad Yimel González Tovar | IT Engineer & Digital Strategist";
  
  const seoDescription =
    language === "es"
      ? "Ingeniero en TI especializado en transformación digital, automatización con IA, desarrollo web y marketing estratégico. 4+ años de experiencia en Querétaro, México."
      : "IT Engineer specialized in digital transformation, AI automation, web development, and strategic marketing. 4+ years of experience in Querétaro, Mexico.";
  
  const seoKeywords =
    language === "es"
      ? "Ingeniero en TI, Estratega Digital, Desarrollo Web, Automatización IA, Diseño UX/UI, Marketing Digital, Querétaro, México, Joad Yimel, Ingeniero de Software, E-commerce"
      : "IT Engineer, Digital Strategist, Web Development, AI Automation, UX/UI Design, Digital Marketing, Querétaro, Mexico, Joad Yimel, Software Engineer, E-commerce";

  const contactTitle = t("contact.title").split("\n");

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        lang={language}
      />
      <StructuredData />
      
      <div className="bg-[#0D0D0D] min-h-screen relative overflow-x-hidden">
        {/* Noise Texture Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <CustomCursor />
        <NavBar />

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 relative">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* CV 2025 - Rotated text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:block absolute top-32 right-12 font-['DM_Mono'] text-[#F0EDE6]/30 text-xs tracking-widest"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              CV 2025
            </motion.div>

            {/* Hero Name */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="font-['Syne'] font-bold text-[#F0EDE6] text-7xl md:text-[12rem] lg:text-[14rem] leading-[0.85] tracking-tight uppercase">
                JOAD
                <br />
                YIMEL
              </h1>
            </motion.div>

            {/* Role Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-12"
            >
              <p className="font-['DM_Mono'] text-[#AAFF45] text-lg md:text-xl tracking-wider">
                {t("hero.role")}
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-['DM_Mono'] text-[#F0EDE6]/60 text-sm md:text-base max-w-2xl mb-16"
            >
              {t("hero.subtitle")}
            </motion.p>
          </div>

          {/* Marquee Ticker at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <MarqueeTicker text={t("hero.marquee")} />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              {/* Decorative Number */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ once: true }}
                className="hidden md:block md:col-span-3"
              >
                <div className="font-['Syne'] font-bold text-[12rem] leading-none text-[#F0EDE6]">
                  00
                </div>
              </motion.div>

              {/* Content */}
              <div className="md:col-span-9">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-[#AAFF45] mb-8 uppercase tracking-tight">
                    {t("about.title")}
                  </h2>
                  <p className="font-['Syne'] text-2xl md:text-3xl text-[#F0EDE6] leading-relaxed mb-6">
                    {t("about.quote")}
                  </p>
                  <p className="font-['DM_Mono'] text-[#F0EDE6]/70 text-sm md:text-base leading-relaxed max-w-3xl">
                    {t("about.description")}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-20 md:py-32 px-6 md:px-12 relative">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-[#AAFF45] uppercase tracking-tight mb-4">
                {t("experience.title")}
              </h2>
              <div className="w-24 h-1 bg-[#AAFF45]" />
            </motion.div>

            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto pb-8 hide-scrollbar">
              <div className="flex gap-6 md:gap-8">
                <ExperienceCard
                  company="Carl's Jr. Querétaro"
                  period={t("experience.carlsjr.period")}
                  role={t("experience.carlsjr.role")}
                  stats={[
                    { value: "100%", label: t("experience.carlsjr.stat1") },
                    { value: "30%", label: t("experience.carlsjr.stat2") },
                    { value: "15hrs", label: t("experience.carlsjr.stat3") },
                  ]}
                  tags={[
                    t("tag.metaAds"),
                    t("tag.aiAutomation"),
                    t("tag.dmb"),
                    t("tag.uxui"),
                    t("tag.seo"),
                    t("tag.ecommerce"),
                    t("tag.branding"),
                  ]}
                  delay={0}
                />
                <ExperienceCard
                  company="CAAMTH"
                  period={t("experience.caamth.period")}
                  role={t("experience.caamth.role")}
                  stats={[
                    { value: "80%", label: t("experience.caamth.stat1") },
                    { value: "100%", label: t("experience.caamth.stat2") },
                    { value: "5+", label: t("experience.caamth.stat3") },
                  ]}
                  tags={[
                    t("tag.cms"),
                    t("tag.digitalMigration"),
                    t("tag.graphicDesign"),
                    t("tag.joomla"),
                    t("tag.techSupport"),
                    t("tag.training"),
                  ]}
                  delay={0.1}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-[#AAFF45] uppercase tracking-tight mb-4">
                {t("skills.title")}
              </h2>
              <div className="w-24 h-1 bg-[#AAFF45]" />
            </motion.div>

            {/* Dev Stack */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs uppercase tracking-widest mb-4"
              >
                {t("skills.devStack")}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skills.devStack.map((skill, idx) => (
                  <SkillPill key={skill} skill={skill} delay={idx * 0.05} />
                ))}
              </div>
            </div>

            {/* Creative */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs uppercase tracking-widest mb-4"
              >
                {t("skills.creative")}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skills.creative.map((skill, idx) => (
                  <SkillPill key={skill} skill={skill} delay={idx * 0.05} />
                ))}
              </div>
            </div>

            {/* Strategy */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs uppercase tracking-widest mb-4"
              >
                {t("skills.strategy")}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skills.strategy.map((skill, idx) => (
                  <SkillPill key={skill} skill={skill} delay={idx * 0.05} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs uppercase tracking-widest mb-4"
              >
                {t("skills.tools")}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <SkillPill key={skill} skill={skill} delay={idx * 0.05} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & AWARDS SECTION */}
        <section id="education" className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-['Syne'] font-bold text-4xl md:text-5xl text-[#AAFF45] uppercase tracking-tight mb-4">
                {t("education.title")}
              </h2>
              <div className="w-24 h-1 bg-[#AAFF45]" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Education Timeline */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-8 border-l-2 border-[#AAFF45]/30"
              >
                <div className="absolute -left-2 top-0 w-3 h-3 bg-[#AAFF45] rounded-full" />
                <h3 className="font-['Syne'] font-bold text-xl text-[#F0EDE6] mb-2">
                  {t("education.degree1")}
                </h3>
                <p className="font-['DM_Mono'] text-[#AAFF45] text-sm mb-1">
                  {t("education.institution")}
                </p>
                <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs">
                  2019 – 2023
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative pl-8 border-l-2 border-[#AAFF45]/30"
              >
                <div className="absolute -left-2 top-0 w-3 h-3 bg-[#AAFF45] rounded-full" />
                <h3 className="font-['Syne'] font-bold text-xl text-[#F0EDE6] mb-2">
                  {t("education.degree2")}
                </h3>
                <p className="font-['DM_Mono'] text-[#AAFF45] text-sm mb-1">
                  {t("education.institution")}
                </p>
                <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs">
                  2017 – 2019
                </p>
              </motion.div>
            </div>

            {/* Awards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <AwardBadge
                icon="trophy"
                title={t("education.award1")}
                subtitle={t("education.award1.sub")}
                delay={0}
              />
              <AwardBadge
                icon="medal"
                title={t("education.award2")}
                subtitle={t("education.award2.sub")}
                delay={0.1}
              />
              <AwardBadge
                icon="award"
                title={t("education.award3")}
                subtitle={t("education.award3.sub")}
                delay={0.2}
              />
              <AwardBadge
                icon="award"
                title={t("education.award4")}
                subtitle={t("education.award4.sub")}
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 md:py-40 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Syne'] font-bold text-5xl md:text-7xl lg:text-8xl text-[#F0EDE6] uppercase tracking-tight mb-12">
                {contactTitle[0]}
                <br />
                {contactTitle[1]}
              </h2>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                <a
                  href="mailto:joadyimel@gmail.com"
                  className="flex items-center gap-3 font-['DM_Mono'] text-[#AAFF45] hover:text-[#AAFF45]/80 transition-colors text-lg group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  joadyimel@gmail.com
                </a>
                <span className="hidden md:block text-[#F0EDE6]/20">·</span>
                <a
                  href="https://wa.me/527791064897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-['DM_Mono'] text-[#AAFF45] hover:text-[#AAFF45]/80 transition-colors text-lg group"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  779 106 4897
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-8 mb-16">
                <a
                  href="https://www.linkedin.com/in/joad-yimel-gonzález-tovar-8a4a19233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['DM_Mono'] text-[#F0EDE6]/60 hover:text-[#AAFF45] transition-colors text-sm group"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://joadyimel.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-['DM_Mono'] text-[#F0EDE6]/60 hover:text-[#AAFF45] transition-colors text-sm group"
                >
                  <ExternalLink className="w-5 h-5" />
                  Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#F0EDE6]/10 py-8 px-6 md:px-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs">
                JOAD YIMEL GONZÁLEZ TOVAR © 2026
              </p>
              <p className="font-['DM_Mono'] text-[#F0EDE6]/40 text-xs">
                QUERÉTARO · MÉXICO
              </p>
            </div>
          </div>
        </footer>

        {/* Custom CSS for hiding scrollbar */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          body {
            cursor: none !important;
          }
          a, button {
            cursor: none !important;
          }
        `}</style>
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}