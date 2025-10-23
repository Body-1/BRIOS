import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Lock } from 'lucide-react';

const Security = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-20 h-20 bg-emerald-900/40 border-2 border-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ShieldCheck className="text-lime-400" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Data, Secured</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">We prioritize the security and confidentiality of your data. Our systems are built with enterprise-grade security measures to ensure your information is always protected.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Security;