import React from 'react';
import { MessageCircle, Users, Fuel, Gauge } from 'lucide-react';
import type { CarType } from "../constants";
import { WHATSAPP_NUMBER } from "../constants";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  car: CarType;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/cars/${car.id}`);
  };

  const handleWhatsAppBooking = (e: React.MouseEvent) => {
    e.stopPropagation(); // VERY IMPORTANT 🔥 prevents card click
    const message = encodeURIComponent(
      `Hi Carhyra, I'm interested in booking the ${car.name}. Please share availability.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      onClick={handleCardClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="cursor-pointer group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>
            <p className="text-sm text-slate-500">Starting from ₹{car.price}/hour</p>
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