import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import logo from "../assets/logo.png";

export default function Footer() {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi Carhyra, I have a question about your car rental services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-28 h-12 bg-primary rounded-lg pt-4 flex items-center justify-center">
                <img src={logo} className='scale-[1.3]' alt="" />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Perfect car rental services tailored for your comfort and style. Experience the road like never before.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#fleet" className="hover:text-primary transition-colors">Our Fleet</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Why Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+91)-8506885683</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@carhyra.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Vardhaman Mall, Sector-19, Faridabad</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Book Now</h4>
            <p className="text-slate-400 text-sm mb-6">
              Ready to hit the road? Message us directly on WhatsApp for instant booking.
            </p>
            <button 
              onClick={handleWhatsAppContact}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Carhyra. All rights reserved. Designed by neyair</p>
        </div>
      </div>
    </footer>
  );
}
