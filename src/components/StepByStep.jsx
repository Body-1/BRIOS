import React from 'react';
import { motion } from 'framer-motion';

const StepByStep = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'Research goals and audience to create a tailored marketing plan.',
    },
    {
      number: '02',
      title: 'Creative Planning',
      description: 'Develop engaging content and campaigns aligned with your brand.',
    },
    {
      number: '03',
      title: 'Execution & Optimization',
      description: 'Launch campaigns and continuously optimize for better results.',
    },
    {
      number: '04',
      title: 'Reporting & Growth',
      description: 'Track performance and refine strategies for sustained growth.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR PROCESS</span>
          <h2 className="text-3xl md:text-5xl font-bold">Our Step-By-Step Approach</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-8 hover:border-lime-400/50 transition-all h-full">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-lime-400/20">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStep;