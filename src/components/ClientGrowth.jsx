import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Target } from 'lucide-react';

const ClientGrowth = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 px-4 bg-emerald-950/20 simple-wave-bg">
            <div className="container mx-auto max-w-6xl">
                 <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">CLIENT SUCCESS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Visualizing Client Growth</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">A Story of Success</h3>
                        <p className="text-gray-400 mb-8">We helped a SaaS client increase their organic traffic by over 300% in 12 months, leading to a massive boost in demo requests and a 150% increase in monthly recurring revenue.</p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-4xl font-bold text-lime-400">300%</p>
                                <p className="text-gray-400">Traffic Increase</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-lime-400">150%</p>
                                <p className="text-gray-400">MRR Growth</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative h-80 bg-emerald-900/30 rounded-2xl p-6 flex items-end"
                    >
                         <motion.div
                             className="absolute bottom-0 left-0 right-0 h-full flex items-end gap-2 px-4"
                             initial="hidden"
                             animate={inView ? "visible" : "hidden"}
                             transition={{ staggerChildren: 0.2, delayChildren: 0.6 }}
                         >
                            {[60, 120, 100, 180, 250, 300].map((height, i) => (
                                <motion.div
                                    key={i}
                                    className="w-full bg-gradient-to-t from-lime-400 to-emerald-400 rounded-t-lg"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: `${height}px`, opacity: 1 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                />
                            ))}
                         </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientGrowth;