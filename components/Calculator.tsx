import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

interface CalculatorProps {
  onOpenForm: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onOpenForm }) => {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    const p = loanAmount;
    const i = interestRate / 100 / 12;
    const n = loanTerm * 12;

    if (p > 0 && i > 0 && n > 0) {
      const m = (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      setMonthlyPayment(m);
    } else {
      setMonthlyPayment(0);
    }
  }, [loanAmount, interestRate, loanTerm]);

  const inputClasses = "w-full p-4 bg-navy-900 border border-navy-700 rounded-lg text-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gold-500 outline-none transition";
  const labelClasses = "block text-sm font-bold text-gray-300 mb-2";

  return (
    <section id="calculator" className="min-h-screen bg-navy-900 py-20 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Calculadora Hipotecaria
            </h2>
            <p className="text-gray-300 text-lg">
              Estime su pago mensual para tener una idea clara de su presupuesto. Recuerde que esto es solo un estimado de capital e interés; impuestos y seguros variarán según la propiedad.
            </p>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                Tasas actualizadas diariamente
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                Escenarios personalizables
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                Sin impacto en su crédito
              </li>
            </ul>
            <div className="pt-4">
              <Button onClick={onOpenForm} className="w-full md:w-auto">
                OBTENER COTIZACIÓN OFICIAL
              </Button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full bg-navy-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/60"
          >
            <div className="space-y-6">
              <div>
                <label className={labelClasses}>Monto del Préstamo ($)</label>
                <input 
                  type="number" 
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className={inputClasses}
                />
                <input 
                  type="range" 
                  min="100000" 
                  max="2000000" 
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-2 accent-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Tasa de Interés (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    value={interestRate} 
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className={labelClasses}>Plazo (Años)</label>
                  <select 
                    value={loanTerm} 
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className={inputClasses}
                  >
                    <option value="15">15 Años</option>
                    <option value="30">30 Años</option>
                  </select>
                </div>
              </div>

              <div className="pt-8 border-t border-navy-700 mt-8 text-center">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Pago Mensual Estimado</p>
                <p className="text-5xl font-serif font-bold text-gold-500">
                  ${monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-gray-500 mt-2">*Principal e Interés solamente</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;