import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X } from 'lucide-react';

const Comparison = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const features = [
        { name: "Dedicated Strategist", brios: true, others: true },
        { name: "Proprietary Growth AI", brios: true, others: false },
        { name: "Transparent Real-time Dashboard", brios: true, others: false },
        { name: "24/7 Priority Support", brios: true, others: true },
        { name: "Guaranteed Results", brios: true, others: false },
    ];

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">How We Stack Up</h2>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-3 text-center font-bold p-4 border-b border-emerald-800">
                        <div>Feature</div>
                        <div className="text-lime-400">BRIO'S</div>
                        <div>Other Agencies</div>
                    </div>
                    <div className="divide-y divide-emerald-900/50">
                        {features.map((feature, index) => (
                             <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="grid grid-cols-3 items-center p-4"
                            >
                                <div className="font-semibold">{feature.name}</div>
                                <div className="flex justify-center">{feature.brios ? <Check className="text-lime-400" /> : <X className="text-red-500" />}</div>
                                <div className="flex justify-center">{feature.others ? <Check className="text-lime-400" /> : <X className="text-red-500" />}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Comparison;