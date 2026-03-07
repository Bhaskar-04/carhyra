import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import { CARS, VALUE_POINTS, WHATSAPP_NUMBER } from "../constants";

import QR from "../assets/QR.png";

import heroimg1 from "../assets/hero/1.png";
import heroimg2 from "../assets/hero/2.png";
import heroimg3 from "../assets/hero/3.png";
import heroimg4 from "../assets/hero/4.png";
import heroimg5 from "../assets/hero/5.png";
import heroimg6 from "../assets/hero/6.png";

export default function Home() {
  const images = [heroimg1, heroimg2, heroimg3, heroimg4, heroimg5, heroimg6];

  const scrollToFleet = () => {
    document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppHero = () => {
    const message = encodeURIComponent(
      "Hi Carhyra, I'm looking to rent a car. Can you help me?",
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const shuffleArray = (array:string[]) => {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  const [currentImages] = useState(() => shuffleArray(images));

  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * images.length),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImages.length]);

  if (currentImages.length === 0) return null;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-28"
      >
        {/* Background images */}
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover brightness-50 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* DESKTOP QR */}
        <div className="hidden md:block absolute bottom-10 right-10 z-20">
          <div className="flex flex-col items-center gap-4 p-4 rounded-2xl shadow-xl">
            <img src={QR} alt="QR" className="h-36 w-36 object-contain" />

            <a
              href="https://g.page/r/CY30yh0rmTmTEBI/review"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Rate Us On Google
            </a>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-white">A Perfect Car Rental</span>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Drive Your Dreams <br />
              <span className="text-[50px]">With</span>
              <span className="text-primary"> CARHYRA</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-6">
              Experience ease and comfort with our perfect fleet. Simple
              booking, transparent pricing, and exceptional service.
            </p>

            <p className="text-lg md:text-xl text-white/80 mb-10">
              Currently Operating in{" "}
              <b>
                <u>Delhi-NCR</u>
              </b>{" "}
              Region Only!!!
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToFleet}
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold flex items-center gap-2"
              >
                View Our Fleet
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleWhatsAppHero}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FLEET ================= */}
      <section id="fleet" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Fleet
            </h2>
            <p className="text-slate-500">
              Choose from our wide range of meticulously maintained vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={handleWhatsAppHero}
              className="inline-flex items-center gap-2 text-primary font-bold"
            >
              Don't see what you're looking for? Ask us on WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Carhyra?
            </h2>

            <p className="text-slate-500">
              We redefine car rentals by focusing on what matters most: your
              experience, safety, and convenience.
            </p>
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

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {point.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
