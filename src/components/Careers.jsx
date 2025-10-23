import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const positions = [
        { title: "Senior SEO Strategist", location: "Remote" },
        { title: "PPC Campaign Manager", location: "New York, NY" },
        { title: "Content Marketing Specialist", location: "Remote" },
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
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">CAREERS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Join Our Team of Innovators</h2>
                </motion.div>

                <div className="space-y-4 max-w-3xl mx-auto">
                    {positions.map((pos, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            className="bg-emerald-950/30 border border-emerald-900/30 rounded-xl p-6 flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-bold text-xl">{pos.title}</h3>
                                <p className="text-gray-400">{pos.location}</p>
                            </div>
                            <Button variant="ghost" className="text-lime-400 hover:text-lime-300 hover:bg-lime-400/10">
                                Apply Now <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button variant="outline" className="border-emerald-700 text-white hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg">
                        View All Openings
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Careers;