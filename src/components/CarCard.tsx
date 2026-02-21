import React from 'react';
import { MessageCircle, Users, Fuel, Gauge } from 'lucide-react';
import type { CarType } from "../constants";
import { WHATSAPP_NUMBER } from "../constants";
import { motion } from 'framer-motion';

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(`Hi Carhyra, I'm interested in booking the ${car.name}. Please share availability.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {car.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>
            <p className="text-sm text-slate-500">Starting from</p>
          </div>
          
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-xl">
            <Users className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[10px] font-medium text-slate-600">{car.seats} Seats</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-xl">
            <Gauge className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[10px] font-medium text-slate-600">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-50 rounded-xl">
            <Fuel className="w-4 h-4 text-slate-400 mb-1" />
            <span className="text-[10px] font-medium text-slate-600">{car.fuel}</span>
          </div>
        </div>

        <button 
          onClick={handleWhatsAppBooking}
          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5" />
          Book on WhatsApp
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;
