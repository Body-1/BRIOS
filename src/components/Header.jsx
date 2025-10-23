import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Services', 'Process', 'Projects', 'Pricing', 'About', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a2e1f]/80 backdrop-blur-md border-b border-emerald-900/20"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
              <span className="text-[#0a2e1f] font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold">BRIO'S</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm hover:text-lime-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-lime-400 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-6 transition-transform hover:scale-105">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg py-2 hover:text-lime-400 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full w-full mt-4 py-3">
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;