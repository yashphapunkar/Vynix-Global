import { useState, useEffect } from "react";
import { Phone, ShoppingBag, Menu, X, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { BasketItem } from "../types";
import Logo from "./Logo";

interface HeaderProps {
  basket: BasketItem[];
  setIsBasketOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Header({ basket, setIsBasketOpen, scrollToSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Products", id: "products" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800"
            : "bg-gradient-to-b from-black/60 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3 group focus:outline-hidden cursor-pointer"
            id="nav-logo"
          >
            <Logo
              variant={isScrolled ? "teal" : "white"}
              withText={true}
              withTagline={true}
              hideIcon={true}
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 font-sans text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors cursor-pointer duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-600 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "hover:text-teal-600" : "hover:text-teal-300"
                }`}
                id={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Basket */}
          <div className="flex items-center gap-4">
            {/* Basket Button */}
            <button
              onClick={() => setIsBasketOpen(true)}
              className={`relative p-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? "hover:bg-slate-100 text-slate-800"
                  : "hover:bg-white/10 text-white"
              }`}
              title="View Quote Request Basket"
              id="basket-toggle-btn"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-pulse shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Quick Contact Link */}
            <a
              href="tel:+919179995482"
              className="hidden sm:flex items-center gap-2 bg-teal-600 text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20 active:scale-95"
              id="quick-call-btn"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91 91799 95482</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg cursor-pointer ${
                isScrolled ? "text-slate-800" : "text-white"
              }`}
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-xs md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-full bg-white shadow-2xl p-6 transition-transform duration-300 transform md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="mobile-drawer"
      >
        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <Logo variant="teal" withText={true} withTagline={true} hideIcon={true} className="scale-90 origin-left" />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
            id="close-mobile-drawer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-left py-2 px-3 text-slate-700 font-semibold tracking-wide hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors cursor-pointer"
              id={`mobile-nav-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100 space-y-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-teal-600" />
            <span>+91 91799 95482</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-teal-600" />
            <span>info@vynixglobal.com</span>
          </div>
          <div className="flex items-center gap-3 pt-2" id="drawer-social-links">
            <a
              href="https://www.linkedin.com/company/vynix-global/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              id="drawer-linkedin-btn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/vynixglobal?igsh=emV6dG9taW4zanBk"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              id="drawer-instagram-btn"
              aria-label="Instagram Profile"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/share/18uCG9j2Vh/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-colors"
              id="drawer-facebook-btn"
              aria-label="Facebook Page"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <div className="text-[10px] text-slate-400 mt-6 leading-relaxed">
            Registered Office: Indore, MP, India.
          </div>
        </div>
      </div>
    </>
  );
}
