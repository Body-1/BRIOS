import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
  const items = [
    'Search Engine Optimization',
    'Digital Marketing',
    'Social Media Marketing',
    'Content Marketing',
    'Branding Services',
    'Research & Ideation',
  ];

  return (
    <section className="py-8 border-y border-emerald-900/20 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="text-gray-400 text-lg">{item}</span>
            <span className="text-lime-400">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MarqueeSection;