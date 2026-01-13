import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = "max-w-2xl",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`relative w-full ${maxWidth} bg-navy-900 rounded-xl shadow-2xl shadow-black/60 overflow-hidden`}
          >
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-navy-800">
              {title && (
                <h3 className="text-xl font-serif font-bold text-white">
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-navy-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            <div className="p-4 md:p-6 overflow-y-auto max-h-[85vh]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
