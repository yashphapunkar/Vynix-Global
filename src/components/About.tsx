import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Anchor, Award, Cpu, FileCheck, HelpCircle } from "lucide-react";
import { CERTIFICATIONS } from "../data";

const logoSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <!-- Warm, clean off-white background matching the uploaded logo image -->
  <rect width="100%" height="100%" fill="#F8F6F0" />
  
  <!-- Symmetrical interlocking circle logo and text -->
  <g transform="translate(600, 310)">
    <!-- Symbol scaled and centered -->
    <g transform="translate(-110, -210) scale(2.2)">
      <path
        d="M 14,42.5 A 37,37 0 0,1 86,42.5 H 62 A 12,12 0 0,0 50,30.5 H 26 A 12,12 0 0,0 14,42.5 Z"
        fill="#0F6D72"
      />
      <path
        d="M 86,57.5 A 37,37 0 0,1 14,57.5 H 38 A 12,12 0 0,0 50,69.5 H 74 A 12,12 0 0,0 86,57.5 Z"
        fill="#0F6D72"
      />
      <path
        d="M 40,47.5 H 60 A 2.5,2.5 0 0,1 62.5,50 A 2.5,2.5 0 0,1 60,52.5 H 40 A 2.5,2.5 0 0,1 37.5,50 A 2.5,2.5 0 0,1 40,47.5 Z"
        fill="#0F6D72"
      />
    </g>
    
    <!-- "VYNIX GLOBAL" Text exactly styled -->
    <text
      x="0"
      y="110"
      text-anchor="middle"
      fill="#0F6D72"
      font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      font-size="68"
      font-weight="800"
      letter-spacing="4"
    >VYNIX GLOBAL</text>
    
    <!-- "TRUST DELIVERED" Text exactly styled -->
    <text
      x="0"
      y="180"
      text-anchor="middle"
      fill="#0F6D72"
      font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      font-size="34"
      font-weight="600"
      letter-spacing="12"
    >TRUST DELIVERED</text>
  </g>
</svg>
`)}`;

export default function About() {
  const [activeCert, setActiveCert] = useState<number | null>(null);

  const pillars = [
    {
      icon: Cpu,
      title: "Strategic Sourcing Hub",
      description: "Operated across major industrial corridors in India, placing us directly adjacent to India's major automotive component manufacturing clusters and steel processing centers.",
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Quality Auditing",
      description: "Rigorous quality checks. We provide third-party verification (SGS, Bureau Veritas) and detailed Material Test Reports (MTRs) for steel products, ensuring complete specification match.",
    },
    {
      icon: Anchor,
      title: "Optimized Sea Freight",
      description: "Seamless logistics. Consolidations are packed at major Inland Container Depots (ICD) all over India and routed via express freight rails directly to JNPT (Mumbai) or Mundra for global sailings.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient backdrops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-teal-600 font-extrabold tracking-widest text-xs uppercase block mb-3 font-mono">
                Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight leading-tight">
                From the commercial heartland <br />
                <span className="text-teal-600 italic">to the gateways of the world.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 font-light leading-relaxed text-sm sm:text-base">
              <p>
                Operating with a comprehensive <strong className="font-semibold text-slate-900">All-India supply chain network</strong>, Vynix Global works as a premium merchant exporter bridging local craft with international demand.
              </p>
              <p>
                We specialize in bridging the gap between world-class Indian manufacturing standards and global industrial buyers. By positioning our sourcing directly across the top industrial and agricultural clusters of India, we maintain immediate oversight over production quality, raw material sourcing, and cargo loading.
              </p>
              <p>
                Whether securing precision-engineered auto parts from the best OEMs, or hand-sorting premium washed Arabica beans from the shade-grown estates of South India, we operate with a singular, unyielding mandate: <strong className="font-semibold text-teal-600">"Trust Delivered."</strong>
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-100 hover:border-teal-500/20 hover:bg-teal-50/20 transition-all duration-300"
                    id={`pillar-card-${idx}`}
                  >
                    <div className="h-10 w-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Assets & Certificates */}
          <div className="lg:col-span-5 space-y-10">
            {/* Elegant Image Frame with floating Corner Brand Card */}
            <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-200/50">
              {/* Main background image: Sourcing & Global Logistics */}
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
                alt="Vynix Global Logistics Corridor"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                referrerPolicy="no-referrer"
              />
              {/* Gradient shadow overlay for better text/badge contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent pointer-events-none" />
            </div>

            {/* Certifications & Trade Compliance List */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-xs mt-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-teal-600" />
                <span>Trade Compliance & Licenses</span>
              </h3>
              <p className="text-xs text-slate-500 font-light mb-4">
                We maintain active regulatory registration with India's apex commerce councils to ensure legally bulletproof export processing:
              </p>

              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-3.5 rounded-lg border transition-all duration-300 ${
                      activeCert === index
                        ? "bg-teal-600 border-teal-600 text-white shadow-md"
                        : "bg-white border-slate-200/60 text-slate-800 hover:border-slate-300 cursor-pointer"
                    }`}
                    onClick={() => setActiveCert(activeCert === index ? null : index)}
                    id={`cert-item-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs ${
                          activeCert === index ? "bg-white/20 text-white" : "bg-teal-50 text-teal-600"
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm tracking-wide">{cert.name}</h4>
                          <p className={`text-[10px] font-mono ${
                            activeCert === index ? "text-teal-200" : "text-slate-500"
                          }`}>
                            {cert.authority}
                          </p>
                        </div>
                      </div>
                      <HelpCircle className={`h-4 w-4 shrink-0 transition-transform ${
                        activeCert === index ? "rotate-180 text-white" : "text-slate-400"
                      }`} />
                    </div>

                    {activeCert === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 pt-3 border-t border-white/20 text-xs text-teal-50 font-light leading-relaxed"
                      >
                        {cert.description}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
