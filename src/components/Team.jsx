import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const teamMembers = [
        { name: "Mohammed Samy", role: "CEO & Founder", image: "https://i.ibb.co/8DRdVr36/person-1.jpg" },
        { name: "Abdel Rahman", role: "Head of Marketing", image: "https://i.ibb.co/kVncpfXP/person-2.jpg" },
        { name: "Moshref Elbanna", role: "Lead SEO Strategist", image: "https://i.ibb.co/sd7PJFjt/person-3.jpg" },
        { name: "Ahmed Mohammed", role: "Social Media Manager", image: "https://i.ibb.co/WvPMsfsW/person-4.webp" },
    ];
    
    return (
        <section ref={ref} id="about" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">OUR TEAM</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Meet The Experts</h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50, rotateY: -30 }}
                            animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                                <img loading="lazy" src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-sm text-lime-300">{member.role}</p>
                                <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="text-white hover:text-lime-400"><Linkedin size={16} /></a>
                                    <a href="#" className="text-white hover:text-lime-400"><Twitter size={16} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
