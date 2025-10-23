import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Stethoscope, ShoppingCart, Utensils } from 'lucide-react';

const Industries = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const industries = [
        { icon: Building, name: "Real Estate" },
        { icon: Stethoscope, name: "Healthcare" },
        { icon: ShoppingCart, name: "E-commerce" },
        { icon: Utensils, name: "Restaurants" },
    ];
    
    const { ref: sectionRef, inView: sectionInView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
    
    return (
        <section ref={sectionRef} className={`py-20 px-4 section-glow ${sectionInView ? 'section-glow-in-view' : ''}`}>
            <div ref={ref} className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR EXPERTISE</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Industries We Serve</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="w-24 h-24 bg-emerald-950/30 border-2 border-emerald-800/60 rounded-full flex items-center justify-center mx-auto mb-4 hover:border-lime-400 transition-colors">
                                <industry.icon className="text-lime-400" size={40} />
                            </div>
                            <h3 className="font-semibold text-xl">{industry.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;