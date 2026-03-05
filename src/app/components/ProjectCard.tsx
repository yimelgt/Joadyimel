import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Project } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-[#161616] border border-[#F0EDE6]/10 hover:border-[#AAFF45]/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Category */}
        <p className="font-['DM_Mono'] text-[#AAFF45]/60 text-xs uppercase tracking-widest mb-3">
          {project.category[language]}
        </p>

        {/* Title */}
        <h3 className="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#F0EDE6] mb-4 group-hover:text-[#AAFF45] transition-colors duration-300">
          {project.title[language]}
        </h3>

        {/* Description */}
        <p className="font-['DM_Mono'] text-[#F0EDE6]/70 text-sm leading-relaxed mb-6">
          {project.description[language]}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#0D0D0D] border border-[#F0EDE6]/10 font-['DM_Mono'] text-[#F0EDE6]/60 text-xs tracking-wider hover:border-[#AAFF45]/30 hover:text-[#AAFF45] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
