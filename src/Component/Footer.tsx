import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-primary-foreground py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="flex items-center gap-2 flex-wrap justify-center md:justify-start" style={{ fontSize: '1rem' }}>
              <span>© {currentYear} Md Eyamin Sheikh.</span>
              <span className="flex items-center gap-1">
                All rights reserved.
              </span>
            </p>
            <p className="flex items-center gap-2 mt-2 flex-wrap justify-center md:justify-start" style={{ fontSize: '0.95rem', opacity: 0.8 }}>
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> using React & Next.js
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 flex-wrap justify-center"
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-secondary transition-colors"
                style={{ fontSize: '0.95rem' }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Scroll to Top */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-full bg-secondary text-white hover:bg-secondary/90 transition-all shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 pt-8 border-t border-primary-foreground/10"
        >
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
            Designed & Developed by Md Eyamin Sheikh | Bogura, Bangladesh
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
