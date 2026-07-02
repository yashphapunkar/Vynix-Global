import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Award, Globe, Shield } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-slate-950 text-white overflow-hidden pt-24"
    >
      {/* Background Image with Rich Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
          alt="Vynix Global Trade & Shipping Logistics"
          className="w-full h-full object-cover object-center transform scale-105 animate-pulse-slow filter brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex-grow flex items-center w-full">
        <div className="max-w-3xl py-12 text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6 shadow-xs shadow-teal-500/5"
            id="hero-tagline-badge"
          >
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
            <span>Vynix Global | Indian Exporter</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-none mb-6"
            id="hero-main-title"
          >
            Trust Delivered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-200 to-white">
              Globally.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-xl font-light text-slate-300 leading-relaxed max-w-2xl mb-10"
            id="hero-subtext"
          >
            Vynix Global is India's premier export facilitator. We deliver high-integrity{" "}
            <span className="text-teal-300 font-semibold">Automotive Components</span> and{" "}
            <span className="text-teal-300 font-semibold">Premium Indian Coffee</span> with certified quality, sourcing directly from the best OEMs and single estates all over India to global markets.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            id="hero-ctas"
          >
            <button
              onClick={() => scrollToSection("products")}
              className="bg-teal-600 text-white font-bold tracking-wider px-8 py-4 rounded-lg uppercase text-xs flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-teal-500 hover:shadow-lg hover:shadow-teal-500/20 active:scale-98 cursor-pointer"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-900 text-slate-300 hover:text-white font-bold tracking-wider px-8 py-4 rounded-lg uppercase text-xs transition-all duration-300 active:scale-98 cursor-pointer"
            >
              Request Custom Quote
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden sm:flex items-center gap-6 text-xs text-slate-400 border-t border-slate-900 pt-6"
            id="hero-trust-indicators"
          >
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-teal-500" />
              <span>SGS Audited</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-teal-500" />
              <span>FIEO Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-teal-500" />
              <span>100% Export Unit</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Small Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest font-semibold font-mono">Scroll</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}
