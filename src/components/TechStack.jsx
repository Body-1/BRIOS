import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, BarChart } from 'lucide-react';

const TechStack = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const technologies = ['Figma', 'Google Analytics', 'SEMrush', 'Ahrefs', 'HubSpot', 'Mailchimp', 'React', 'Vite'];

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">TOOLS & TECHNOLOGY</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Our Tech Arsenal</h2>
                </motion.div>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, type: 'spring', stiffness: 120 }}
                            className="bg-emerald-900/40 p-4 rounded-lg text-gray-300 font-semibold text-base hover:text-lime-400 hover:bg-emerald-800/60 transition-all"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;