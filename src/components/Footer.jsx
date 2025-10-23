import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Services: ['SEO', 'Social Media', 'PPC', 'Content Marketing'],
    Resources: ['Blog', 'Case Studies', 'Guides', 'FAQs'],
  };

  return (
    <footer className="bg-emerald-950/40 border-t border-emerald-900/30 pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                <span className="text-[#0a2e1f] font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">BRIO'S</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming brands through innovative digital marketing solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center hover:bg-lime-400/20 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center hover:bg-lime-400/20 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center hover:bg-lime-400/20 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center hover:bg-lime-400/20 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-emerald-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 BRIO'S. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-lime-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          <div className='text-center text-gray-400 text-sm'>
                      <br />
          Made with ❤️ by Abdel Rahman Elbanna
          <br />
          Whatsapp: 01022090863
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;