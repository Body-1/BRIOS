import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ExpertSolutions = () => {
  const features = ['Tailored Strategies For Every Business', 'Data-Driven Results', 'Results-Backed ROI Growth'];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR SERVICES</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Expert Digital Marketing Solutions For Every Size
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Digital marketing agencies use various online channels and strategies to help businesses reach their target audience, increase brand awareness, and drive conversions.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => <motion.div key={feature} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className="flex items-center gap-3">
                  <CheckCircle2 className="text-lime-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>)}
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-8">
                Learn More
              </Button>
              <Button variant="outline" className="border-emerald-700 text-white hover:bg-emerald-900/30 rounded-full px-8">
                Contact Sales
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="relative">
            <img loading="lazy" alt="Team collaboration in modern office" className="w-full h-[500px] object-cover rounded-2xl" src="https://i.ibb.co/ksLfzgJD/688525261865bcc1d64952e7-About-Image.jpg" />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ExpertSolutions;
