import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";

interface TestimonialsProps {
  onOpenForm: () => void;
}

const testimonials = [
  {
    name: "María González",
    role: "International Investor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    text: "The process for foreigners is usually complicated, but the team made it seem easy. I managed to close my apartment in Brickell in record time.",
  },
  {
    name: "Carlos & Elena Rodriguez",
    role: "First-Time Buyers",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop",
    text: "Thanks to their advice, we qualified for an FHA loan with an incredible rate. We are happy in our new home in Doral!",
  },
  {
    name: "James Smith",
    role: "Luxury Property",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    text: "Professionalism at its finest. They handled my Jumbo loan application with precision and excellent communication throughout.",
  },
];

const Testimonials: React.FC<TestimonialsProps> = ({ onOpenForm }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 3000); // 3 seconds auto-play

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="min-h-screen relative py-20 px-6 flex items-center overflow-hidden"
    >
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Luxury Homes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-900">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center items-center">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-navy-900 text-white hover:bg-gold-500 transition-colors z-20 absolute left-0 md:-left-12 lg:-left-20 hidden md:block"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="w-full overflow-hidden px-4 md:px-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 md:p-12 rounded-xl shadow-2xl relative border border-gray-100 mx-auto"
                >
                  <Quote className="absolute top-6 right-6 text-gold-200 w-12 h-12" />
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-gold-500 shadow-md"
                    />
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-navy-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gold-600 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-lg leading-relaxed text-center md:text-left">
                    "{testimonials[currentIndex].text}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-navy-900 text-white hover:bg-gold-500 transition-colors z-20 absolute right-0 md:-right-12 lg:-right-20 hidden md:block"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-gold-500 w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button onClick={onOpenForm}>JOIN OUR SUCCESS STORIES</Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
