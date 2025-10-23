import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const benefits = [
    {
      title: 'Results-Driven Approach',
      description: 'We focus on delivering measurable results that align with your business goals and drive real growth.',
    },
    {
      title: 'Tailored Client Approach',
      description: 'Every strategy is customized to fit your unique needs, ensuring maximum impact and relevance.',
    },
    {
      title: 'Data-Backed Strategies',
      description: 'Our data-backed strategies are designed to optimize performance and maximize your ROI.',
    },
    {
      title: 'Dedicated Support',
      description: 'We prioritize your success with personalized attention and dedicated support throughout.',
    },
    {
      title: 'Continuous Optimization',
      description: 'Continuous optimization and testing ensure your campaigns stay ahead of the competition.',
    },
    {
      title: 'Transparent Reporting',
      description: 'Transparent reporting and regular updates keep you informed of your campaign performance.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-emerald-950/20 simple-wave-bg">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 text-sm font-semibold mb-4 block">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-5xl font-bold">The Benefits Of Choosing Us</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-8 hover:border-lime-400/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-lime-400/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-lime-400/20 transition-colors">
                  <Sparkles className="text-lime-400" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;