import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import Button from "./ui/Button";
import Modal from "./ui/Modal";

// Images for the carousel
const IMAGES = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-2a429feb084d?q=80&w=2075&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=2574&auto=format&fit=crop",
];

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Images for the carousel - AI Generated Miami Properties
  const IMAGES = [
    "/images/miami_hero_1.png",
    "/images/miami_hero_2.png",
    "/images/miami_hero_3.png",
    "/images/miami_hero_4.png",
  ];

  // Carousel Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-navy-900">
      {/* Background Layer: Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-navy-900/40 z-10" />
            <img
              src={IMAGES[currentImage]}
              alt="Luxury Property Miami"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white text-sm tracking-wider mb-4 uppercase backdrop-blur-sm">
            Expertos en Bienes Raíces de Miami
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
            Tu Llave al Paraíso <br />
            <span className="text-gold-400">Inmobiliario</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
            Financiamiento hipotecario personalizado, rápido y transparente.
          </h2>
          <p className="text-gray-300 max-w-xl text-lg mb-10 md:mx-0 mx-auto">
            Hacemos realidad tu sueño de invertir o vivir en Miami con las tasas
            más competitivas del mercado y un servicio de clase mundial.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={onOpenForm} className="w-full md:w-auto">
              SOLICITAR PRE-CALIFICACIÓN
            </Button>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-md text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm group w-full md:w-auto"
            >
              <div className="w-8 h-8 rounded-full bg-white text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 ml-1" fill="currentColor" />
              </div>
              <span className="font-medium">Ver Video</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        maxWidth="max-w-5xl"
      >
        <div className="w-full bg-black rounded-lg overflow-hidden shadow-2xl">
          {/* Placeholder video - Replace src with your local copyright-free video file */}
          <video
            controls
            autoPlay
            className="w-full h-auto max-h-[80vh] aspect-video"
            poster="/images/miami_hero_1.png"
          >
            <source
              src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="p-4 bg-navy-900 text-white">
            <h3 className="text-lg font-bold">Descubre Miami Prime Mortgage</h3>
            <p className="text-sm text-gray-300">
              Conoce más sobre nuestros servicios exclusivos.
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
