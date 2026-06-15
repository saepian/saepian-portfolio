import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { X, ArrowRight, Tag, Building2, CalendarDays, Briefcase, ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"all" | "featured" | "experimental">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "featured") return p.featured;
    if (filter === "experimental") return p.tags.includes("WebGL") || p.tags.includes("Interactive Map") || p.tags.includes("Web Audio API");
    return true;
  });

  return (
    <section className="relative w-full bg-transparent py-24 select-none">
      {/* Infinite Kinetic Marquee to set the mood */}
      <div className="w-full overflow-hidden border-y border-neutral-900 bg-neutral-950 py-5 mb-16 flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
          className="flex gap-16 text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase select-none"
        >
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-red-600 font-extrabold">//</span> SAEPIAN ARCHIVE <span className="text-neutral-700">|</span>
              SUBTRACT THE NOISE <span className="text-neutral-700">|</span> 
              SIGNAL HIGH CONTRAST <span className="text-neutral-700">|</span> 
              SEOUL BASED LAB <span className="text-red-600 font-extrabold">_2026</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-baseline justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-red-600" />
              <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase">
                WORKS MATRIX
              </span>
            </div>
            <h2 className="font-anybody text-4xl md:text-6xl font-black italic text-stroke-white tracking-tighter">
              PORTFOLIO // <span className="text-white not-italic">아카이브</span>
            </h2>
          </div>

          {/* Filter System */}
          <div className="flex items-center gap-2 border border-neutral-900 bg-neutral-950/80 p-1 rounded-sm">
            {(["all", "featured", "experimental"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className="px-4 py-1.5 font-sans font-semibold text-[10px] tracking-widest uppercase cursor-pointer rounded-sm transition-all duration-300"
                style={{
                  backgroundColor: filter === t ? "#dc2626" : "transparent",
                  color: filter === t ? "#ffffff" : "#a3a3a3",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {filteredProjects.map((project, idx) => {
            // Creative staggered layout that sums to exactly 12 columns per row
            const colSpans = [
              "md:col-span-8", "md:col-span-4", // Row 1
              "md:col-span-4", "md:col-span-8", // Row 2
              "md:col-span-6", "md:col-span-6", // Row 3
              "md:col-span-4", "md:col-span-8", // Row 4
              "md:col-span-8", "md:col-span-4", // Row 5
              "md:col-span-6", "md:col-span-6", // Row 6
              "md:col-span-4", "md:col-span-4", "md:col-span-4" // Row 7
            ];
            const colSpan = colSpans[idx % colSpans.length];

            return (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`relative group cursor-pointer bg-neutral-950 border border-neutral-900 hover:border-red-600 overflow-hidden transition-all duration-500 flex flex-col justify-between ${colSpan}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                {/* Image Wrap */}
                <div className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden bg-neutral-900">
                  {/* Glass Scanlines Layer */}
                  <div className="absolute inset-0 scanlines pointer-events-none z-10 opacity-30 group-hover:opacity-10" />

                  {/* Red overlay tint */}
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-950/20 mix-blend-color transition-colors duration-500 z-10" />

                  <motion.img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Image Title Overlay — centered on the image */}
                  {project.imageTitle && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
                      <span className="font-anybody font-black italic text-white text-xl md:text-3xl tracking-tighter text-center leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-pre-line">
                        {project.imageTitle}
                      </span>
                    </div>
                  )}

                  {/* Tag Indicator top left */}
                  <div className="absolute top-4 left-4 z-20 flex gap-2">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-sm text-[9px] font-mono tracking-widest text-white border border-neutral-800">
                      {project.year}
                    </span>
                  </div>

                  {/* Interactive Glitch Lines on hover */}
                  <div className="absolute left-0 top-0 w-full h-[1px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
                  <div className="absolute left-0 bottom-0 w-full h-[1px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right z-20" />
                </div>

                {/* Card Content Footer */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-red-500 mb-2">
                      {project.category}
                    </div>
                    <h3 className="font-anybody font-extrabold text-xl tracking-tight text-white group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-neutral-900/60 group-hover:border-red-600/30 transition-colors">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[9px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white flex items-center gap-1.5 group-hover:text-red-500 transition-colors">
                      EXPLORE <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Detail Viewer Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto no-scrollbar cursor-pointer"
          >
            {/* Scroll + centering wrapper */}
            <div className="flex min-h-full items-start md:items-center justify-center p-4 pt-24 md:pt-6">
              {/* Custom Modal Sheet */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden cursor-default mb-4"
                transition={{ type: "spring", damping: 26, stiffness: 220 }}
              >
                {/* Image banner inside Modal */}
                <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] overflow-hidden">
                  <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />

                  {/* Image Title Overlay on modal */}
                  {selectedProject.imageTitle && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-6">
                      <span className="font-anybody font-black italic text-white text-2xl sm:text-4xl md:text-5xl tracking-tighter text-center leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)] whitespace-pre-line">
                        {selectedProject.imageTitle}
                      </span>
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-20 p-2.5 bg-black/80 hover:bg-red-600 text-white rounded-full border border-neutral-800 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Contents list */}
                <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Left/Main Column: Title and Description */}
                  <div className="md:col-span-2 space-y-5">
                    <div>
                      <span className="font-mono text-xs tracking-widest text-red-500 uppercase block mb-1">
                        {selectedProject.category}
                      </span>
                      <h2 className="font-anybody font-black text-2xl sm:text-3xl md:text-5xl tracking-normal text-white italic leading-tight">
                        {selectedProject.title}
                      </h2>
                    </div>

                    <hr className="border-neutral-900" />

                    <div>
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                        OVERVIEW // 요약
                      </h4>
                      <p className="font-sans text-sm md:text-base text-neutral-300 font-light leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
                        KEY METRICS & TAGS
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                            <Tag className="w-2.5 h-2.5 text-red-600" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Details Sidebar */}
                  <div className="space-y-5 bg-neutral-900/40 p-5 border border-neutral-900 self-start">
                    <h3 className="font-mono text-[11px] tracking-widest text-red-500 uppercase border-b border-neutral-800 pb-3">
                      METRIC DETAILS
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-3 text-xs">
                        <span className="font-mono text-neutral-500 flex items-center gap-1.5 shrink-0">
                          <Building2 className="w-3.5 h-3.5 text-red-600" />
                          고객사
                        </span>
                        <span className="font-mono text-white text-right font-medium">
                          {selectedProject.client || "—"}
                        </span>
                      </div>

                      <div className="flex justify-between items-start gap-3 text-xs">
                        <span className="font-mono text-neutral-500 flex items-center gap-1.5 shrink-0">
                          <CalendarDays className="w-3.5 h-3.5 text-red-600" />
                          참여기간
                        </span>
                        <span className="font-mono text-white text-right font-medium">
                          {selectedProject.period || "—"}
                        </span>
                      </div>

                      <div className="flex justify-between items-start gap-3 text-xs">
                        <span className="font-mono text-neutral-500 flex items-center gap-1.5 shrink-0">
                          <Briefcase className="w-3.5 h-3.5 text-red-600" />
                          소속회사
                        </span>
                        <span className="font-mono text-white text-right font-medium">
                          {selectedProject.studio || "—"}
                        </span>
                      </div>
                    </div>

                    <hr className="border-neutral-800" />

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-neutral-800 hover:bg-neutral-700 font-sans text-xs font-bold tracking-widest text-white uppercase transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        바로가기
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-3 bg-red-600 hover:bg-white hover:text-black font-sans text-xs font-bold tracking-widest text-white uppercase transition-colors cursor-pointer"
                    >
                      CLOSE MATRIX VIEWER
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
