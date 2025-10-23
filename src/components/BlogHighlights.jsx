import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const BlogHighlights = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const posts = [
        { title: "The Future of SEO in an AI-Driven World", image: "https://images.unsplash.com/photo-1674027444485-a940e4d1217f" },
        { title: "5 Social Media Trends to Watch in 2026", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" },
    ];

    return (
        <section ref={ref} id="blog" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">LATEST INSIGHTS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">From Our Blog</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl overflow-hidden group relative"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl font-bold mb-4 h-16 text-white">{post.title}</h3>
                                <a href="#" className="font-semibold text-lime-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogHighlights;