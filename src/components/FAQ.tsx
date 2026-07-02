import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, BookOpen, Truck, ShieldCheck, HelpCircle as AskIcon } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "shipping" | "compliance" | "general">("all");

  const categories = [
    { label: "All Trade FAQs", value: "all", icon: BookOpen },
    { label: "Ocean Logistics", value: "shipping", icon: Truck },
    { label: "Compliance & Auditing", value: "compliance", icon: ShieldCheck },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    return selectedCategory === "all" || faq.category === selectedCategory;
  });

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-teal-600 font-extrabold tracking-widest text-xs uppercase block mb-3 font-mono">
            Support & Resources
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-slate-950 tracking-tight mb-4">
            International Trade FAQs
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base max-w-lg mx-auto">
            Review detailed descriptions of our foreign exchange transaction systems, packing standards, and shipping procedures.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex justify-center items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none" id="faq-category-filters">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value as any);
                  setOpenIndex(null); // Reset active accordion
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/10"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion Questions Stack */}
        <div className="space-y-4" id="faq-accordions">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-100 shadow-xs overflow-hidden transition-all duration-200 hover:border-teal-500/10"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-hidden"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-teal-600 shrink-0" />
                    <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-teal-600" : ""
                  }`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-slate-50 text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        <div className="bg-slate-50/50 p-4 rounded-lg border border-slate-100/50 mt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional support contact banner */}
        <div className="mt-12 bg-teal-50/50 border border-teal-100 rounded-xl p-6 text-center space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-snug">
            Have a custom compliance or logistics requirement that is not outlined in this section?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-lg inline-flex items-center gap-2 cursor-pointer shadow-sm shadow-teal-600/10"
          >
            <AskIcon className="h-4 w-4" />
            <span>Connect with our Trade Officers</span>
          </button>
        </div>

      </div>
    </section>
  );
}
