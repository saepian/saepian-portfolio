import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PARTICIPATIONS, SPECIALTIES } from "../data";
import { ChevronDown, Award as AwardIcon, Sparkles, Sliders } from "lucide-react";

export default function AboutSection() {
  const [activeSpecialty, setActiveSpecialty] = useState<string | null>("01");
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({ "2026": true });

  const SKILL_TARGETS = [90, 85, 80, 75] as const;
  const [skillVals, setSkillVals] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animated) return;
    const el = skillsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setAnimated(true);

        const duration = 1100;
        const stagger = 100;

        SKILL_TARGETS.forEach((target, i) => {
          const startTime = performance.now() + i * stagger;

          const tick = (now: number) => {
            const elapsed = Math.max(0, now - startTime);
            const t = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // cubic ease-out
            const current = Math.round(target * eased);
            setSkillVals(prev => {
              const next = [...prev];
              next[i] = current;
              return next;
            });
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  const updateSkill = (i: number, val: number) => {
    setSkillVals(prev => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  };

  const toggleYear = (yr: string) => {
    setOpenYears(prev => ({
      ...prev,
      [yr]: !prev[yr]
    }));
  };

  const YEARS = ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "ETC"];

  const getParticipationsForYear = (yr: string) => {
    if (yr === "ETC") {
      const knownYears = ["2026", "2025", "2024", "2023", "2022", "2021", "2020"];
      return PARTICIPATIONS.filter(p => !knownYears.includes(p.year));
    }
    return PARTICIPATIONS.filter(p => p.year === yr);
  };

  return (
    <section className="relative w-full bg-transparent py-24 select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Double Symmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Philosophical Manifesto Grid */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-600 animate-pulse" />
                <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase">
                  PHILOSOPHY // 철학
                </span>
              </div>
              <h2 className="font-anybody text-4xl md:text-6xl font-black italic text-stroke-white tracking-tighter leading-none">
                THE ART OF <br />
                <span className="text-white not-italic">DELETION</span>
              </h2>
            </div>

            <div className="space-y-6 font-sans text-neutral-400 font-light text-sm md:text-base leading-relaxed text-left">
              <p>
                좋은 디자인은 더하는 것에서 오지 않습니다. 무엇을 남길지보다 무엇을 덜어낼지 고민하는 과정에서, 본질이 드러납니다. 불필요한 장식과 시각적 잡음을 걷어내고 나면, 남은 것들이 스스로 말하기 시작합니다.
              </p>
              <p className="border-l-2 border-red-600 pl-4 py-1.5 italic text-neutral-300">
                &quot;To remove is to reveal. What's left is what matters.&quot;
              </p>
              <p>
                SAEPIAN은 화려한 효과보다 정확한 선택에 집중합니다. 한 줄의 타이포그래피, 하나의 색, 하나의 여백 — 그 안에 담긴 의도가 작업의 전부입니다.
              </p>
            </div>

            {/* SKILLS */}
            <div ref={skillsRef} className="border border-neutral-900 bg-black/40 backdrop-blur-sm p-6 space-y-6 rounded-[2px] transition-all">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5 text-red-500" />
                  <span className="font-mono text-[10px] tracking-widest text-neutral-300 uppercase">
                    ■ SKILLS // 보유 역량
                  </span>
                </div>
              </div>

              <div className="space-y-3 bg-neutral-950/50 p-4 border border-neutral-900/30 rounded-[1px]">
                {(["UI / UX DESIGN", "TYPOGRAPHY & LAYOUT", "WEB PUBLISHING (HTML/CSS)", "BRANDING & ILLUSTRATION"] as const).map((label, i) => (
                  <div key={label}>
                    <div className="flex justify-between font-mono text-[9px] text-neutral-500 mb-1">
                      <span>{label}</span>
                      <span className="text-red-500 font-bold">{skillVals[i]}%</span>
                    </div>
                    <input
                      type="range" min="0" max="100" value={skillVals[i]}
                      onChange={(e) => updateSkill(i, Number(e.target.value))}
                      className="w-full accent-red-600 bg-neutral-900 h-[2px] rounded-lg cursor-pointer"
                    />
                  </div>
                ))}

                <div className="pt-2 border-t border-neutral-900 flex justify-between items-center font-mono text-[10px]">
                  <span className="text-neutral-500">EXPERIENCE:</span>
                  <span className="text-white font-extrabold tracking-wider">5+ YEARS</span>
                </div>
              </div>

              {/* Working Principles */}
              <div className="space-y-2 bg-neutral-950/20 border border-neutral-900/20 p-4">
                <div className="flex items-center gap-1.5 border-b border-neutral-900/60 pb-1.5 mb-2">
                  <Sparkles className="w-3 h-3 text-red-500" />
                  <span className="font-mono text-[9px] tracking-wider text-neutral-300 uppercase">
                    ■ WORKING PRINCIPLES // 작업 원칙
                  </span>
                </div>
                <div className="flex-col flex gap-1.5">
                  <div className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="font-mono text-[9px] text-red-600 select-none">01_</span>
                    <p className="font-sans text-[11px] leading-tight">모든 요소에는 존재해야 할 이유가 있다.</p>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="font-mono text-[9px] text-red-600 select-none">02_</span>
                    <p className="font-sans text-[11px] leading-tight">사용자가 느끼는 디테일이 곧 브랜드의 신뢰다.</p>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="font-mono text-[9px] text-red-600 select-none">03_</span>
                    <p className="font-sans text-[11px] leading-tight">완성은 더할 것이 없을 때가 아니라, 뺄 것이 없을 때다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Specialties Accordion + Recognition */}
          <div className="lg:col-span-7 space-y-16">
            {/* Specialties Accordion Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 bg-red-500" />
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                  SPECIALTIES MATRIX
                </span>
              </div>
              <h3 className="font-anybody font-bold text-2xl tracking-wide text-white">전문 분야 및 핵심 역량</h3>
            </div>

            {/* Accordion Component */}
            <div className="border-t border-neutral-900 divide-y divide-neutral-900">
              {SPECIALTIES.map((spec) => {
                const isOpen = activeSpecialty === spec.number;
                return (
                  <div key={spec.number} className="py-5 transition-colors duration-300">
                    <button
                      onClick={() => setActiveSpecialty(isOpen ? null : spec.number)}
                      className="w-full flex items-center justify-between text-left cursor-pointer group"
                    >
                      <div className="flex items-baseline gap-6">
                        <span className="font-mono text-xs text-red-600 font-bold tracking-tight">
                          {spec.number}._
                        </span>
                        <span className="font-anybody font-extrabold text-lg md:text-xl text-neutral-300 group-hover:text-white group-hover:pl-2 transition-all">
                          {spec.name}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-neutral-500 group-hover:text-red-500"
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pb-2 pl-12 font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                            {spec.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Project Participations List */}
            <div className="pt-8">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <AwardIcon className="w-4 h-4 text-red-600" />
                  <span className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase">
                    PROJECT PARTICIPATIONS / 프로젝트 참여
                  </span>
                </div>
                <span className="font-mono text-[10px] text-neutral-600">PAGE // 02</span>
              </div>

              {/* Nested Collapsible Year Folders */}
              <div className="space-y-4">
                {YEARS.map((year) => {
                  const items = getParticipationsForYear(year);
                  const isOpen = !!openYears[year];

                  return (
                    <div key={year} className="border border-neutral-900/40 bg-neutral-950/10 hover:bg-neutral-950/20 transition-all rounded-[1px] overflow-hidden">
                      {/* Year Button Trigger */}
                      <button
                        onClick={() => toggleYear(year)}
                        className="w-full flex items-center justify-between p-4 bg-neutral-950/60 hover:bg-black/40 border-b border-neutral-950/30 transition-all text-left cursor-pointer group"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-anybody font-black text-xl md:text-2xl text-white group-hover:text-red-500 transition-colors tracking-tight">
                            {year}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-500">
                            ( {items.length} {items.length === 1 ? 'project' : 'projects'} )
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 320, damping: 20 }}
                          className="text-neutral-500 group-hover:text-red-500"
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>

                      {/* Expanded Panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-3 bg-black/20 divide-y divide-neutral-950/40">
                              {items.length === 0 ? (
                                <div className="p-4 font-mono text-xs text-neutral-600 italic">
                                  No records documented for this sequence.
                                </div>
                              ) : (
                                items.map((item, idx) => (
                                  <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-transparent hover:border-neutral-900 bg-neutral-950/20 hover:bg-neutral-950 transition-all duration-300"
                                  >
                                    {/* Left Accent indicator */}
                                    <div className="absolute left-0 bottom-0 w-[2.5px] h-0 bg-red-600 group-hover:h-full transition-all duration-300" />

                                    <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-4 z-10 pl-2">
                                      <span className="font-sans font-extrabold text-sm text-neutral-200 group-hover:text-red-500 transition-colors">
                                        {item.title}
                                      </span>
                                      <span className="font-mono text-[10px] text-neutral-500">
                                        {item.client}
                                      </span>
                                    </div>

                                    <div className="flex items-center justify-between sm:justify-end gap-12 mt-2 sm:mt-0 z-10 pl-2 sm:pl-0">
                                      <span className="font-sans text-[11px] text-neutral-400 font-light">
                                        {item.category}
                                      </span>
                                      <span className="font-mono text-[10px] text-neutral-600 group-hover:text-neutral-400 transition-colors">
                                        {item.year}
                                      </span>
                                    </div>
                                  </motion.div>
                                ))
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
