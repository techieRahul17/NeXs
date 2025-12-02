import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Process = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="process" ref={ref} className="py-32 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-20 text-center">
                    THE <span className="text-primary">BLUEPRINT</span>
                </h2>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
                    {/* Background Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 hidden md:block -translate-y-1/2"></div>
                    {/* Animated Line */}
                    <motion.div
                        style={{ scaleX, transformOrigin: "left" }}
                        className="absolute top-1/2 left-0 w-full h-1 bg-primary hidden md:block -translate-y-1/2"
                    ></motion.div>

                    {['Discovery', 'Wireframe', 'Code', 'Launch'].map((step, index) => (
                        <div key={step} className="relative z-10 bg-dark p-6 border border-white/10 hover:border-primary transition-colors duration-300 w-full md:w-64 text-center group">
                            <div className="text-4xl font-bold font-heading text-white/20 mb-2 group-hover:text-primary transition-colors">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                                {step}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
