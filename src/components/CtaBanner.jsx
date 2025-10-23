import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';

const CtaBanner = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section ref={ref} className="py-10 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="bg-gradient-to-br from-lime-400 to-emerald-500 rounded-3xl p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2e1f] mb-4">Ready to Skyrocket Your Growth?</h2>
                    <p className="text-emerald-900 max-w-2xl mx-auto mb-8">Stop guessing and start growing. Let's talk about your project and how we can help you achieve your goals.</p>
                    <Button className="bg-[#0a2e1f] text-white hover:bg-black rounded-full px-8 py-6 text-lg">
                        Book a Free Strategy Call
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaBanner;