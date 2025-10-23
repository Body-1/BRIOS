import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <motion.div 
        className="glow-effect"
        style={{ top: '5%', left: '-10%', width: '500px', height: '500px', background: '#34d399' }}
        animate={{ x: [0, 100, -50, 0], y: [0, -50, 100, 0], scale: [1, 1.1, 1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="glow-effect"
        style={{ bottom: '5%', right: '-15%', width: '600px', height: '600px', background: '#a3e635' }}
        animate={{ x: [0, -100, 50, 0], y: [0, 50, -100, 0], scale: [1, 1.05, 1, 1.05, 1], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'easeInOut' }}
      />
       <motion.div 
        className="glow-effect"
        style={{ top: '40%', right: '35%', width: '400px', height: '400px', background: '#10b981' }}
        animate={{ x: [0, 50, -50, 0], y: [0, 100, -50, 0], scale: [1, 1.08, 1, 1.08, 1], rotate: [0, 20, -10, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default BackgroundEffects;