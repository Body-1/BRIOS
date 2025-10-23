import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const GlobalReach = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">GLOBAL REACH</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Serving Clients Worldwide</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative aspect-video bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-4"
                >
                    <img loading="lazy" alt="World map with glowing points" className="w-full h-full object-contain opacity-30" src="https://images.unsplash.com/photo-1585858229735-cd08d8cb510d" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-2xl font-bold text-center max-w-md">From local startups to international enterprises, our strategies transcend borders.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalReach;