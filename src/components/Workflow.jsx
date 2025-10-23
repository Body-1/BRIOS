import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PenTool, BrainCircuit, Rocket, BarChart2 } from 'lucide-react';

const Workflow = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const steps = [
        { icon: PenTool, title: 'Briefing' },
        { icon: BrainCircuit, title: 'Strategy' },
        { icon: Rocket, title: 'Execution' },
        { icon: BarChart2, title: 'Analysis' },
    ];

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR WORKFLOW</span>
                    <h2 className="text-3xl md:text-5xl font-bold">A Look Inside Our Process</h2>
                </motion.div>
                
                <div className="relative">
                    <motion.div 
                        className="absolute top-1/2 left-0 w-full h-1 bg-emerald-800/50"
                        initial={{ scaleX: 0 }}
                        animate={inView ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        style={{ transformOrigin: 'left' }}
                    />
                    <div className="grid grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.title}
                                className="text-center flex flex-col items-center"
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                            >
                                <div className="w-20 h-20 bg-emerald-900 border-2 border-lime-400 rounded-full flex items-center justify-center mb-4 z-10">
                                    <step.icon className="text-lime-400" size={32} />
                                </div>
                                <h3 className="font-bold text-lg">{step.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;