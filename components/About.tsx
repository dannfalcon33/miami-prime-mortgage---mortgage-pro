import React from "react";
import { motion } from "framer-motion";
import Button from "./ui/Button";

interface AboutProps {
  onOpenForm: () => void;
}

const About: React.FC<AboutProps> = ({ onOpenForm }) => {
  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center py-20 px-6 overflow-hidden"
    >
      {/* Background Image with Blue Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2568&auto=format&fit=crop"
          alt="Miami Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/90" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6"
          >
            <h4 className="text-gold-400 font-bold tracking-widest uppercase">
              About Us
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Excellence in Real Estate Financing
            </h2>
            <div className="w-20 h-1 bg-gold-500"></div>
            <p className="text-gray-300 text-lg leading-relaxed">
              At{" "}
              <span className="font-bold text-white">Miami Prime Mortgage</span>
              , we understand that buying a property is not just a transaction,
              it is the construction of a legacy. Founded in the heart of Miami,
              our firm specializes in structuring complex financial solutions
              for international investors and local buyers.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our mission is to simplify the mortgage process with transparency,
              integrity, and speed. Whether it's your first home or an addition
              to your investment portfolio, we are here to guide you every step
              of the way.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-4xl font-serif font-bold text-gold-500">
                  15+
                </h3>
                <p className="text-gray-400 font-medium">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-gold-500">
                  $500M+
                </h3>
                <p className="text-gray-400 font-medium">In Closed Loans</p>
              </div>
            </div>

            <div className="pt-6">
              <Button onClick={onOpenForm}>START PROCESS</Button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="CEO Alejandro Rivera"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-4 border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl rounded-lg border-l-4 border-gold-500 hidden md:block">
                <p className="font-serif text-xl font-bold text-navy-900">
                  Alejandro Rivera
                </p>
                <p className="text-gray-500">CEO & Founder</p>
              </div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-10 right-10 w-full h-full border-2 border-gold-500/30 rounded-lg -z-0 transform translate-x-4 translate-y-4 hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
