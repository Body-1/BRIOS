import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const tiers = [
    {
      name: 'Starter',
      price: '$499',
      description: 'For small businesses and startups.',
      features: ['Basic SEO', 'Social Media Setup', 'Monthly Reports'],
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$999',
      description: 'For growing businesses.',
      features: ['Advanced SEO', 'Full SMM', 'PPC Campaigns', 'Content Marketing'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale organizations.',
      features: ['Dedicated Team', 'Full-Scale Strategy', 'Advanced Analytics', '24/7 Support'],
      highlight: false,
    },
  ];

  return (
    <section ref={ref} id="pricing" className="py-20 px-4 bg-emerald-950/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 text-sm font-semibold mb-4 block">PRICING PLANS</span>
          <h2 className="text-3xl md:text-5xl font-bold">Choose The Right Plan For You</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              className={`relative rounded-3xl p-8 border ${
                tier.highlight 
                  ? 'bg-emerald-900/40 border-lime-400' 
                  : 'bg-emerald-950/30 border-emerald-900/30'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 py-1 bg-lime-400 text-[#0a2e1f] text-sm font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-gray-400 mb-6">{tier.description}</p>
              <div className="text-5xl font-bold mb-6">
                {tier.price}
                {tier.price.startsWith('$') && <span className="text-lg text-gray-400">/mo</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {tier.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-lime-400" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full rounded-full py-6 text-lg ${
                  tier.highlight 
                    ? 'bg-lime-400 text-[#0a2e1f] hover:bg-lime-500' 
                    : 'bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-400/10'
                }`}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;