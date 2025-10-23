import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, DollarSign, Award } from 'lucide-react';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: Users, value: 900, suffix: '+', label: 'Trusted Clients' },
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Client Retention Rate' },
    { icon: DollarSign, value: 610, suffix: 'm', label: 'Revenue Generated' },
    { icon: Award, value: 25, suffix: '+', label: 'Industry Awards' },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-emerald-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center"
    >
      <div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center mx-auto mb-4">
        <stat.icon className="text-lime-400" size={24} />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-lime-400 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </motion.div>
  );
};

export default Stats;