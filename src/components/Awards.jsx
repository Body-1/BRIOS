import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

const Awards = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const awards = [
        { name: "Digital Agency of the Year", year: "2025" },
        { name: "Top SEO Company", year: "2024" },
        { name: "Best Client Results", year: "2024" },
        { name: "Innovation in Marketing Award", year: "2023" },
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
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">RECOGNITION</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Awards & Accolades</h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.name}
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-6 text-center"
                        >
                            <Award className="mx-auto text-lime-400 mb-4" size={36} />
                            <p className="font-bold text-lg">{award.name}</p>
                            <p className="text-gray-400 text-sm">{award.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;