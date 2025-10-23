import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const RoiCalculator = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    
    const [investment, setInvestment] = useState(1000);
    const [conversionRate, setConversionRate] = useState(3);
    const [customerValue, setCustomerValue] = useState(500);
    const [roi, setRoi] = useState(null);

    const handleCalculate = (e) => {
        e.preventDefault();
        const investmentNum = parseFloat(investment);
        const conversionRateNum = parseFloat(conversionRate) / 100;
        const customerValueNum = parseFloat(customerValue);

        if (investmentNum > 0 && conversionRateNum > 0 && customerValueNum > 0) {
            // A simplified ROI calculation
            // This assumes a certain number of leads generated per investment.
            // Let's assume investment buys 10,000 visitors.
            const visitors = 10000;
            const leads = visitors * conversionRateNum;
            const revenue = leads * customerValueNum;
            const calculatedRoi = ((revenue - investmentNum) / investmentNum) * 100;
            setRoi(calculatedRoi);
        } else {
            setRoi(null);
        }
    };
    
    const { ref: sectionRef, inView: sectionInView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });

    return (
        <section ref={sectionRef} className={`py-20 px-4 bg-emerald-950/20 section-glow ${sectionInView ? 'section-glow-in-view' : ''}`}>
            <div className="container mx-auto max-w-4xl">
                 <motion.div
                    className="text-center mb-12"
                >
                    <span className="text-lime-400 text-sm font-semibold mb-4 block">ROI CALCULATOR</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Estimate Your Potential Return</h2>
                </motion.div>

                <motion.div
                    className="bg-emerald-900/30 border border-emerald-800/50 rounded-2xl p-8"
                >
                    <form onSubmit={handleCalculate} className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 items-end">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Monthly Investment ($)</label>
                            <input type="number" value={investment} onChange={(e) => setInvestment(e.target.value)} placeholder="1000" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Conversion Rate (%)</label>
                            <input type="number" value={conversionRate} onChange={(e) => setConversionRate(e.target.value)} placeholder="3" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Avg. Customer Value ($)</label>
                            <input type="number" value={customerValue} onChange={(e) => setCustomerValue(e.target.value)} placeholder="500" className="w-full bg-emerald-900/50 p-3 rounded-md border border-emerald-800 focus:ring-lime-400 focus:border-lime-400 outline-none" />
                        </div>
                         <div className="sm:col-span-2 md:col-span-1">
                            <Button type="submit" className="w-full bg-lime-400 text-[#0a2e1f] hover:bg-lime-500 rounded-full py-3 text-base flex items-center gap-2">
                                <Calculator size={18} /> Calculate
                            </Button>
                        </div>
                    </form>
                    {roi !== null && (
                        <motion.div
                            className="mt-8 text-center bg-lime-400/10 border border-lime-400/20 p-6 rounded-lg"
                        >
                            <p className="text-lg text-gray-300">Estimated Return on Investment:</p>
                            <p className={`text-4xl font-bold ${roi >= 0 ? 'text-lime-400' : 'text-red-500'}`}>
                                {roi.toFixed(0)}%
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default RoiCalculator;