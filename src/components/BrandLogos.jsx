import React from 'react';
import { motion } from 'framer-motion';

const BrandLogos = () => {
  const brands = ['Brandora', 'Luomis', 'MARAVELY', 'Nexura', 'ezMarketix', 'Opettus'];

  return (
    <section className="py-12 border-y border-emerald-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-gray-500 hover:text-lime-400 transition-colors text-lg font-semibold cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;