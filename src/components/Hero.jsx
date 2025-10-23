import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 hero-grid-bg z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a2e1f] via-[#0a2e1f]/80 to-[#0a2e1f] z-0"></div>
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/20 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 bg-emerald-900/50 border border-emerald-700/50 rounded-full text-sm text-lime-400 backdrop-blur-sm flex items-center gap-2">
              <Zap size={16} />
              #1 RATED GROWTH AGENCY
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter"
          >
            Go Viral. Dominate Markets.
            <br />
            We Make It{' '}
            <span className="text-gradient">Inevitable.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            We don't just market; we engineer explosive growth. Our data-driven, creative strategies are the launchpad for brands aiming for the stratosphere.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-8 py-6 text-lg group shadow-lg shadow-lime-500/20 hover:shadow-xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105">
              Unleash Your Growth
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="outline" className="border-emerald-700 text-white hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg backdrop-blur-sm">
              Watch Our Reel
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;