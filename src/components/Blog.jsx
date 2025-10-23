import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    
    const posts = [
        { title: "The Future of SEO in an AI-Driven World", date: "Oct 23, 2025", image: "https://images.unsplash.com/photo-1674027444485-a940e4d1217f" },
        { title: "5 Social Media Trends to Watch in 2026", date: "Oct 15, 2025", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7" },
        { title: "Creating Content That Converts: A Step-by-Step Guide", date: "Oct 02, 2025", image: "https://images.unsplash.com/photo-1553877522-c36980345885" },
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
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">LATEST NEWS</span>
                    <h2 className="text-3xl md:text-5xl font-bold">From Our Blog</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl overflow-hidden group"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img loading="lazy" src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                                <h3 className="text-xl font-bold mb-4 h-16">{post.title}</h3>
                                <a href="#" className="font-semibold text-lime-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Button variant="outline" className="border-emerald-700 text-white hover:bg-emerald-900/30 rounded-full px-8 py-6 text-lg">
                        View All Posts
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Blog;