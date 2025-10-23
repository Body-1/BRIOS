import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';

const MediaKit = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-2">For Press & Media</h2>
                    <p className="text-gray-400 mb-6">Access our official brand assets and media kit.</p>
                    <Button className="bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-400/10 rounded-full px-8 py-4 text-base">
                        <DownloadCloud size={18} className="mr-2" />
                        Download Media Kit
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default MediaKit;