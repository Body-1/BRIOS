import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, MapPin, BarChart3 } from 'lucide-react';
const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const services = [{
    icon: Search,
    title: 'Social Media Management',
    description: 'Engage your audience and build a strong online presence with our expert social media strategies and management.'
  }, {
    icon: MapPin,
    title: 'Search Engine Optimization (SEO)',
    description: 'Boost your visibility and rank higher on search engines with our proven SEO techniques.'
  }, {
    icon: BarChart3,
    title: 'Pay-Per-Click Advertising (PPC)',
    description: 'Drive targeted traffic and maximize ROI with our data-driven PPC campaigns.'
  }];
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Digital Services To Grow <br />Your Brand
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => <motion.div key={service.title} initial={{
          opacity: 0,
          y: 50
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          delay: index * 0.2,
          duration: 0.6
        }} className="bg-emerald-950/30 border border-emerald-900/30 rounded-2xl p-8 hover:border-lime-400/50 transition-all group">
              <div className="w-14 h-14 bg-lime-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
                <service.icon className="text-lime-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Services;
