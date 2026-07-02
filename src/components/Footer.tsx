import { Anchor, ShieldAlert, Award, FileSpreadsheet, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const handleLinkClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 pb-12 border-b border-slate-900" id="footer-top-grid">
        
        {/* Brand identity */}
        <div className="md:col-span-5 space-y-4">
          <Logo variant="white" withText={true} withTagline={true} hideIcon={true} />
          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            Providing high-integrity merchant export logistics connecting quality Indian manufacturing to the international arena. Underpinned by our promise of "Trust Delivered."
          </p>
          <div className="text-[10px] text-slate-500 font-mono">
            GST Registered • MSME Certified
          </div>
          <div className="flex items-center gap-3 pt-1" id="footer-social-links">
            <a
              href="https://www.linkedin.com/company/vynix-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 hover:bg-teal-950/20 transition-all duration-300 active:scale-95"
              aria-label="LinkedIn Profile"
              id="footer-linkedin-btn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/vynixglobal?igsh=emV6dG9taW4zanBk"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 hover:bg-teal-950/20 transition-all duration-300 active:scale-95"
              aria-label="Instagram Profile"
              id="footer-instagram-btn"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/share/18uCG9j2Vh/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500 hover:bg-teal-950/20 transition-all duration-300 active:scale-95"
              aria-label="Facebook Page"
              id="footer-facebook-btn"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
            Navigation Map
          </h4>
          <ul className="space-y-2 text-xs font-light text-slate-400">
            <li>
              <button onClick={() => handleLinkClick("home")} className="hover:text-teal-400 transition cursor-pointer">
                Home Profile
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("about")} className="hover:text-teal-400 transition cursor-pointer">
                Corporate About
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("products")} className="hover:text-teal-400 transition cursor-pointer">
                Sourcing Portfolios
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("faq")} className="hover:text-teal-400 transition cursor-pointer">
                Logistics & Trade FAQs
              </button>
            </li>
            <li>
              <button onClick={() => handleLinkClick("contact")} className="hover:text-teal-400 transition cursor-pointer">
                Custom Quote Requests
              </button>
            </li>
          </ul>
        </div>

        {/* Portfolios details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
            Regional Sourcing Channels
          </h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              <div>
                <span className="text-slate-300 font-medium">All India Automotive Sourcing</span>
                <span className="text-[10px] text-slate-500 block">Premium engine parts, forged gears, and high-tensile fasteners sourced from top OEMs.</span>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
              <div>
                <span className="text-slate-300 font-medium">Chikmagalur & Coorg Estates</span>
                <span className="text-[10px] text-slate-500 block">Shade-grown specialty Arabica and extra-bold robusta coffee.</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-6" id="footer-bottom-bar">
        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Vynix Global. All Rights Reserved. Manufactured under strict IATF 16949 specifications.
        </p>
        <div className="flex items-center gap-6 text-xs text-slate-400 font-bold uppercase tracking-widest font-mono">
          <span>Trust Delivered</span>
          <span className="text-slate-600">|</span>
          <span>India</span>
        </div>
      </div>
    </footer>
  );
}
