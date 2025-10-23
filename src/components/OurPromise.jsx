import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, TrendingUp, HeartHandshake as Handshake } from 'lucide-react';

const OurPromise = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const promises = [
        { icon: ShieldCheck, text: "Transparent Reporting" },
        { icon: TrendingUp, text: "Data-Driven Growth" },
        { icon: Handshake, text: "Dedicated Partnership" },
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
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR PROMISE</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Our Commitment To You</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {promises.map((promise, index) => (
                        <motion.div
                            key={promise.text}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: 'backOut' }}
                            className="flex items-center gap-4 bg-emerald-950/30 p-6 rounded-xl border border-emerald-900/30"
                        >
                            <promise.icon className="text-lime-400" size={32} />
                            <span className="text-xl font-semibold">{promise.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromise;