import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Heart, Target } from 'lucide-react';

const OurValues = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const values = [
        { icon: Zap, title: 'Innovation', description: 'We constantly seek new and better ways to drive growth for our clients.' },
        { icon: Heart, title: 'Passion', description: 'We are passionate about our clients\' success and treat their business as our own.' },
        { icon: Target, title: 'Results', description: 'Our focus is always on delivering measurable and impactful results.' },
    ];

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR ETHOS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">The Values That Drive Us</h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
                            className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-8 text-center group"
                        >
                            <div className="w-16 h-16 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-400/20 group-hover:scale-110 transition-all duration-300">
                                <value.icon className="text-lime-400" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;