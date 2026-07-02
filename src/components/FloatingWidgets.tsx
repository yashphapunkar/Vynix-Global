import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappLink = `https://wa.me/919179995482?text=Hello%20Vynix%20Global,%20I%20visited%20your%20export%20portal%20and%20am%20interested%20in%20sourcing%20commercial%20goods.%20Could%20we%20connect?`;

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-40" id="floating-widgets-bar">
      
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white h-13 w-13 rounded-full flex items-center justify-center shadow-xl hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
        title="Chat via WhatsApp"
        id="whatsapp-floating-btn"
      >
        {/* Custom robust WhatsApp SVG Icon */}
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.01 14.069.99 11.45.99c-5.438 0-9.863 4.371-9.867 9.801 0 1.73.457 3.41 1.32 4.937L1.85 21.082l5.8-1.528zM17.56 14.51c-.326-.163-1.925-.95-2.221-1.058-.297-.11-.513-.163-.73.163-.216.325-.838 1.058-1.027 1.275-.19.217-.378.244-.705.082-.326-.163-1.378-.508-2.625-1.622-.97-.866-1.625-1.936-1.815-2.262-.19-.325-.02-.501.143-.662.146-.145.326-.38.489-.57.162-.191.216-.326.325-.543.11-.217.054-.407-.027-.57-.082-.163-.73-1.763-1.002-2.414-.265-.637-.534-.55-.73-.56-.19-.009-.406-.01-.622-.01-.217 0-.568.082-.866.407-.297.325-1.137 1.112-1.137 2.713 0 1.601 1.163 3.146 1.325 3.363.163.217 2.288 3.5 5.545 4.908.775.335 1.38.535 1.85.684.779.247 1.488.213 2.048.129.624-.093 1.925-.787 2.196-1.517.272-.73.272-1.357.19-1.48-.082-.125-.298-.201-.625-.364z" />
        </svg>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:+919179995482"
        className="bg-teal-600 hover:bg-teal-700 text-white h-13 w-13 rounded-full flex items-center justify-center shadow-xl hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
        title="Call Trade Hotline"
        id="call-floating-btn"
      >
        <Phone className="h-5.5 w-5.5" />
      </a>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            onClick={scrollToTop}
            className="bg-slate-900 hover:bg-slate-800 text-white h-13 w-13 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-108 active:scale-95 transition-all"
            title="Scroll to Top"
            id="scroll-to-top-btn"
          >
            <ArrowUp className="h-5.5 w-5.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
