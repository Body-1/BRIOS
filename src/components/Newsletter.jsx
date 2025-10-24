import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section ref={ref} className="py-20 px-4 bg-emerald-950/20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-5xl font-bold">Stay Ahead of the Curve</h2>
                    <p className="text-gray-400 mt-4">Subscribe to our newsletter for the latest marketing insights and trends.</p>
                </motion.div>
                
                <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                    <input type="email" placeholder="Enter your email" required className="flex-grow w-full bg-emerald-900/50 p-4 rounded-full border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none text-center sm:text-left" />
                    <Button type="submit" className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-8 py-4 text-base">
                        Subscribe
                    </Button>
                </motion.form>
            </div>
        </section>
    );
};

export default Newsletter;
