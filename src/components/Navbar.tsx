import { MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "../constants";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi Carhyra, I'm interested in renting a car.",
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto  px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="px-6 py-3 h-12 w-32 bg-primary rounded-xl flex items-center justify-center">
            <img
              src={logo}
              alt="Carhyra Logo"
              className="h-full w-full object-cover scale-200 mt-5 "
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className={`text-sm font-medium hover:text-primary transition-colors ${!isScrolled ? "text-white/90" : "text-slate-600"}`}
          >
            Home
          </a>
          <a
            href="#fleet"
            className={`text-sm font-medium hover:text-primary transition-colors ${!isScrolled ? "text-white/90" : "text-slate-600"}`}
          >
            Fleet
          </a>
          <a
            href="#about"
            className={`text-sm font-medium hover:text-primary transition-colors ${!isScrolled ? "text-white/90" : "text-slate-600"}`}
          >
            Why Us
          </a>
          <button
            onClick={handleWhatsAppContact}
            className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={!isScrolled ? "text-white" : "text-slate-900"} />
          ) : (
            <Menu className={!isScrolled ? "text-white" : "text-slate-900"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900"
            >
              Home
            </a>
            <a
              href="#fleet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900"
            >
              Fleet
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900"
            >
              Why Us
            </a>
            <button
              onClick={() => {
                handleWhatsAppContact();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
