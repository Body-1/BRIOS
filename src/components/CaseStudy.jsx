import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CaseStudy = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-lime-400 text-sm font-semibold mb-4 block">CASE STUDIES</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            See What's Worked For <br />Others Clients
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-emerald-950/30 border border-emerald-900/30 rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-[400px]">
              <img loading="lazy" alt="Marketing analytics dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-lime-400 text-[#0a2e1f] px-6 py-3 rounded-lg font-bold text-2xl">
                  72%
                </div>
                <div className="bg-lime-400 text-[#0a2e1f] px-6 py-3 rounded-lg font-bold text-2xl">
                  64%
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 rotate-90 origin-left absolute left-0 top-1/2 -translate-y-1/2">
                  <span className="text-lime-400 font-semibold text-sm whitespace-nowrap">
                    INCREASED BRAND AWARENESS
                  </span>
                </div>
                <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 rotate-90 origin-right absolute right-0 top-1/2 -translate-y-1/2">
                  <span className="text-lime-400 font-semibold text-sm whitespace-nowrap">
                    INCREASED BRAND AWARENESS
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-8">
            <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-8">
              View More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;