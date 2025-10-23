import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamShowcase = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const images = [
        "/src/images/person-1.jpg",
        "/src/images/person-2.jpg",
        "/src/images/person-3.jpeg",
        "/src/images/person-4.jpg",
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
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">THE EXPERTS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Meet a Few of Our Strategists</h2>
                </motion.div>
                <div className="flex justify-center -space-x-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotate: 15 }}
                            animate={inView ? { opacity: 1, y: 0, rotate: (index - 1.5) * 8 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: 'spring' }}
                            className="w-24 h-24 rounded-full border-4 border-emerald-800 overflow-hidden shadow-lg"
                            style={{ zIndex: images.length - index }}
                        >
                            <img loading="lazy" src={src} alt={`Team member ${index + 1}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamShowcase;