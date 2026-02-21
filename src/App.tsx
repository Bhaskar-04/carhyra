/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { ChevronRight, MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import Footer from './components/Footer';
import { CARS, VALUE_POINTS, WHATSAPP_NUMBER } from './constants';

export default function App() {
  const scrollToFleet = () => {
    document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppHero = () => {
    const message = encodeURIComponent("Hi Carhyra, I'm looking to rent a car. Can you help me?");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Car"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-primary font-semibold text-sm mb-6">
              Premium Car Rental
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Drive Your Dreams <br />
              <span className="text-primary">With Carhyra</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Experience luxury and comfort with our premium fleet. Simple booking, transparent pricing, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToFleet}
                className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group"
              >
                View Our Fleet
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleWhatsAppHero}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Carhyra?</h2>
            <p className="text-slate-500">We redefine car rentals by focusing on what matters most: your experience, safety, and convenience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUE_POINTS.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <point.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Fleet</h2>
              <p className="text-slate-500">Choose from our wide range of meticulously maintained vehicles for any occasion.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm font-semibold text-primary border-b-2 border-primary">All Cars</button>
              <button className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">Luxury</button>
              <button className="px-4 py-2 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors">SUV</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={handleWhatsAppHero}
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
            >
              Don't see what you're looking for? Ask us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
            <p className="text-white/80 text-lg mb-10">
              Skip the paperwork and complex forms. Message us on WhatsApp and get your keys in no time.
            </p>
            <button 
              onClick={handleWhatsAppHero}
              className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
