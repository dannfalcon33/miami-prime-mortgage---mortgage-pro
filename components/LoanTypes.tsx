import React from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Palmtree, Percent, Building } from "lucide-react";
import Button from "./ui/Button";

interface LoanTypesProps {
  onOpenForm: () => void;
}

const loans = [
  {
    icon: <Home className="w-8 h-8" />,
    title: "Conventional Loans",
    description:
      "Fixed and adjustable rates with the best market conditions for your primary residence.",
  },
  {
    icon: <Percent className="w-8 h-8" />,
    title: "FHA Loans",
    description:
      "Ideal for first-time buyers. Flexibility in credit and down payment starting at 3.5%.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Investment & DSCR",
    description:
      "Qualify based on the property's rental income, not your personal income.",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Jumbo Loans",
    description:
      "Financing for luxury properties that exceed conforming limits.",
  },
  {
    icon: <Palmtree className="w-8 h-8" />,
    title: "Foreign Nationals",
    description:
      "Specialized programs for international investors who wish to buy in Florida.",
  },
];

const LoanTypes: React.FC<LoanTypesProps> = ({ onOpenForm }) => {
  return (
    <section
      id="services"
      className="min-h-screen bg-navy-800 py-20 px-6 flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
            Solutions for Every Need
          </h2>
        </div>

        {/* Slice(0,3) to show only 3 loans as requested */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {loans.slice(0, 3).map((loan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-navy-900 p-8 rounded-xl hover:bg-navy-900/80 transition-all group shadow-2xl shadow-black/60"
            >
              <div className="w-14 h-14 bg-navy-800 rounded-lg flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                {loan.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {loan.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {loan.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={onOpenForm}>CHECK ELIGIBILITY</Button>
        </div>
      </div>
    </section>
  );
};

export default LoanTypes;
