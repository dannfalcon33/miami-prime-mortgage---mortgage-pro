import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative bg-navy-950 text-white pt-20 pb-10 overflow-hidden"
    >
      {/* Background Image with Blue Opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=2568&auto=format&fit=crop"
          alt="Miami Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-900/95" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-gold-500" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold leading-none">
                  MIAMI PRIME
                </span>
                <span className="text-xs tracking-widest text-gold-400">
                  MORTGAGE LLC
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming the Miami real estate market with integrity and
              excellence. Your trusted partner for residential and commercial
              financing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Navigation</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-gold-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-gold-500 transition-colors"
                >
                  Loan Types
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-gold-500 transition-colors"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-gold-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-1" />
                <span>
                  1234 Brickell Ave, Suite 500
                  <br />
                  Miami, FL 33131
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500" />
                <span>+1 (305) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500" />
                <span>contacto@miamiprime.com</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all"
              >
                <Youtube size={20} />
              </a>
              {/* TikTok Icon (Lucide might not have it in older versions, using text fallback or placeholder) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all font-bold text-xs"
              >
                TT
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center text-gray-500 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Miami Prime Mortgage LLC. All
            rights reserved.
          </p>
          <p className="mt-2">NMLS #123456. Equal Housing Lender.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
