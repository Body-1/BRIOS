import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const FreeResources = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <motion.div 
                    className="bg-gradient-to-br from-emerald-800 to-lime-800 p-10 rounded-3xl text-center"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Our Free SEO Checklist</h2>
                    <p className="text-emerald-200 max-w-2xl mx-auto mb-8">Download our comprehensive checklist to start improving your website's ranking today. No strings attached.</p>
                    <Button className="bg-white text-[#0a2e1f] hover:bg-gray-200 rounded-full px-8 py-6 text-lg group">
                        <Download className="mr-2 group-hover:animate-bounce" size={20} />
                        Download Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default FreeResources;