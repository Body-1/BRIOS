import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { HeartHandshake as Handshake } from 'lucide-react';

const PartnershipProgram = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section ref={ref} className="py-20 px-4 bg-emerald-950/20">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-10 grid md:grid-cols-2 gap-8 items-center"
                >
                    <div>
                        <Handshake className="text-lime-400 mb-4" size={40} />
                        <h2 className="text-3xl font-bold mb-3">Become a Partner</h2>
                        <p className="text-emerald-200">Join our partnership program and grow your business by offering our best-in-class marketing services to your clients. Earn commissions and get dedicated support.</p>
                    </div>
                    <div className="text-center md:text-right">
                        <Button className="bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full px-8 py-6 text-lg">
                            Learn More
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PartnershipProgram;