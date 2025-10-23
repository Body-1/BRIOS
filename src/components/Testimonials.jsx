import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Their comprehensive approach to digital marketing has completely transformed our online presence. The results speak for themselves!",
    name: "John Doe, CEO",
    company: "Tech Startup Inc.",
    avatar: "JD",
    roi: "+250%",
    traffic: "+180%"
  },
  {
    quote: "BRIO'S team is incredibly talented and professional. They delivered beyond our expectations and our sales have skyrocketed.",
    name: "Jane Smith, Founder",
    company: "E-commerce Giant",
    avatar: "JS",
    roi: "+320%",
    traffic: "+210%"
  },
  {
    quote: "Working with them was a game-changer. Their SEO strategies put us on the first page of Google in just a few months.",
    name: "Sam Wilson, CMO",
    company: "SaaS Solutions",
    avatar: "SW",
    roi: "+190%",
    traffic: "+280%"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.8,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + testimonials.length) % testimonials.length, newDirection]);
  };

  const testimonial = testimonials[page];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-lime-400 text-sm font-semibold mb-4 block">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-5xl font-bold">
            What Our Clients Say <br />About BRIO'S
          </h2>
        </motion.div>

        <div className="relative h-[550px] md:h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="absolute w-full h-full"
            >
              <div
                className="bg-emerald-900/30 border border-emerald-700/50 rounded-3xl p-8 md:p-12 h-full flex flex-col"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center flex-grow">
                  <div>
                    <Quote className="text-lime-400 mb-6" size={48} />
                    <p className="text-xl md:text-2xl leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center">
                        <span className="text-[#0a2e1f] font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-gray-400 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-lime-400 fill-lime-400" size={20} />
                      ))}
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="bg-lime-400/10 border border-lime-400/30 rounded-2xl p-6 w-full max-w-sm">
                      <div className="text-sm text-gray-400 mb-2">Premium Services</div>
                      <div className="text-2xl font-bold mb-4">Featured Client Success</div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">ROI Increase</span>
                          <span className="text-lime-400 font-bold">{testimonial.roi}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Traffic Growth</span>
                          <span className="text-lime-400 font-bold">{testimonial.traffic}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => paginate(-1)} className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <button onClick={() => paginate(1)} className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;