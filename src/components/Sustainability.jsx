import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Leaf } from 'lucide-react';

const Sustainability = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4 bg-emerald-950/20">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Leaf className="text-lime-400" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Sustainability</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">We believe in growth that's not only good for business but also for the planet. We're proud to be a carbon-neutral company and support green initiatives.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Sustainability;