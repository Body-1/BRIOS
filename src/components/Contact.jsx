import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
const Contact = () => {
  const {
    ref,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  const handleSubmit = e => {
    e.preventDefault();
  };
  return <section ref={ref} id="contact" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">GET IN TOUCH</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Ready to Grow Your Brand?</h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.2
        }} className="space-y-8">
                       <p className="text-gray-300 text-lg">
                           Have a project in mind? We'd love to hear about it. Fill out the form or use our contact details to get in touch. Let's create something amazing together.
                       </p>
                       <div className="space-y-4">
                           <div className="flex items-center gap-4">
                               <Mail className="text-lime-400" size={20} />
                               <span className="text-lg">brios@gmail.com</span>
                           </div>
                            <div className="flex items-center gap-4">
                               <Phone className="text-lime-400" size={20} />
                               <span className="text-lg">01022090863</span>
                           </div>
                            <div className="flex items-center gap-4">
                               <MapPin className="text-lime-400" size={20} />
                               <span className="text-lg">Egypt, Cairo</span>
                           </div>
                       </div>
                    </motion.div>
                     <motion.form onSubmit={handleSubmit} initial={{
          opacity: 0,
          x: 50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.7,
          delay: 0.4
        }} className="space-y-4 bg-emerald-950/30 p-8 rounded-2xl border border-emerald-900/30">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                            <input type="email" placeholder="Your Email" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                        <textarea placeholder="Your Message" rows="5" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none"></textarea>
                        <Button type="submit" className="w-full bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full py-3 text-base">Send Message</Button>
                    </motion.form>
                </div>
            </div>
        </section>;
};
export default Contact;
