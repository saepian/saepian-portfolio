import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, MapPin, Mail, Phone, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_rfwqbx9";
const EMAILJS_TEMPLATE_ID = "template_wi3svdd";
const EMAILJS_PUBLIC_KEY  = "2-1XL6-mjaKqyMQ8Y";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ from_name: "", from_email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [focusedId, setFocusedId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setIsError(false);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setIsSuccess(true);
        setFormState({ from_name: "", from_email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      })
      .catch(() => {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="relative w-full bg-transparent py-24 select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Symmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Block: Seoul Map Visual Anchor & Agency Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 animate-ping" />
                <span className="font-mono text-[10px] tracking-widest text-red-500 uppercase">
                  OPEN FOR PROJECTS
                </span>
              </div>
              <h2 className="font-anybody text-4xl md:text-6xl font-black italic text-stroke-white tracking-tighter leading-none">
                CONTACT // <span className="text-white not-italic">연락망</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-md">
                불필요한 것을 덜어내고, 본질에 집중한 결과물을 만듭니다. 브랜드든 웹사이트든, 명료하게 전달되는 디자인을 약속합니다.
              </p>
            </div>

            {/* Abstract Dark Seoul Frame with Laser Dot Overlay */}
            <div className="relative group w-full aspect-[16/10] overflow-hidden bg-neutral-950 border border-neutral-900 rounded-sm">
              <div className="absolute inset-0 scanlines pointer-events-none z-10 opacity-45" />
              
              {/* Overlay Grid Coordinates */}
              <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-red-500 bg-black/85 border border-neutral-800 px-3 py-1 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-red-600 animate-pulse" />
                <span>BASED IN SEOUL // REMOTE STUDIO</span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000"
                alt="Seoul Night Kinetic Geometry"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-[1.03] transition-all duration-700"
              />

              {/* Red Laser Radar Target Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-red-600/60 shadow-[0_0_10px_#dc2626] animate-pulse z-15" />
            </div>

            {/* Raw Agency Details list */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-neutral-900 font-mono text-[11px] text-neutral-500">
              <div className="space-y-1.5 text-left">
                <div className="text-neutral-700 font-bold uppercase">SECURE MAIL_</div>
                <a href="mailto:saepian2@gmail.com" className="text-neutral-400 hover:text-red-500 transition-colors flex items-center gap-1">
                  saepian2@gmail.com <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="space-y-1.5 text-left">

              </div>
            </div>
          </div>

          {/* Right Block: High-Contrast Dynamic Signal Input Form */}
          <div className="lg:col-span-6 bg-neutral-950/40 border border-neutral-900 p-8 md:p-12 flex flex-col justify-between">
            <div className="mb-8">
              <div className="font-mono text-[10px] text-neutral-600 uppercase mb-2">INITIATING DIGITAL LINK</div>
              <h3 className="font-anybody font-extrabold text-2xl tracking-normal text-white">
                PROJECT INQUIRY
              </h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Input Item 1: Name */}
              <div className="relative group">
                <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1 group-focus-within:text-red-500 transition-colors">
                  NAME *
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="예: 홍길동 (HONG GILDONG)"
                  value={formState.from_name}
                  onChange={(e) => setFormState({ ...formState, from_name: e.target.value })}
                  onFocus={() => setFocusedId("from_name")}
                  onBlur={() => setFocusedId(null)}
                  className="w-full bg-transparent text-white font-sans text-sm py-2.5 outline-none placeholder:text-neutral-700 transition-colors"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800" />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-red-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedId === "from_name" || formState.from_name ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Input Item 2: Email */}
              <div className="relative group">
                <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1 group-focus-within:text-red-500 transition-colors">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  placeholder="name@company.com"
                  value={formState.from_email}
                  onChange={(e) => setFormState({ ...formState, from_email: e.target.value })}
                  onFocus={() => setFocusedId("from_email")}
                  onBlur={() => setFocusedId(null)}
                  className="w-full bg-transparent text-white font-sans text-sm py-2.5 outline-none placeholder:text-neutral-700 transition-colors"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800" />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-red-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedId === "from_email" || formState.from_email ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Input Item 3: Message */}
              <div className="relative group">
                <label className="block font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-1 group-focus-within:text-red-500 transition-colors">
                  MESSAGE *
                </label>
                <textarea
                  rows={4}
                  name="message"
                  placeholder="진행하고자 하는 프로젝트를 설명해 주세요."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedId("message")}
                  onBlur={() => setFocusedId(null)}
                  className="w-full bg-transparent text-white font-sans text-sm py-2.5 outline-none placeholder:text-neutral-700 transition-colors resize-none"
                />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-800" />
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-red-600 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedId === "message" || formState.message ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Action area */}
              <div className="relative pt-4 flex flex-col items-stretch">
                <button
                  type="submit"
                  disabled={isSubmitting || !formState.from_name || !formState.from_email}
                  className="group w-full py-4 bg-red-600 hover:bg-neutral-100 hover:text-black font-sans text-xs font-bold tracking-widest text-white uppercase transition-all duration-300 disabled:bg-neutral-900 disabled:text-neutral-600 border border-transparent disabled:border-transparent cursor-pointer flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderSignal />
                      <span>SECURE TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND</span>
                      <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-16 left-0 right-0 p-3 bg-red-950/60 border border-red-900 text-center text-xs font-mono text-red-400 select-none"
                    >
                      ✓ 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.
                    </motion.div>
                  )}
                  {isError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-16 left-0 right-0 p-3 bg-neutral-950 border border-neutral-700 text-center text-xs font-mono text-neutral-400 select-none"
                    >
                      ✕ 전송 실패, 다시 시도해주세요.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Custom Micro spinner component internally
function LoaderSignal() {
  return (
    <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
  );
}
