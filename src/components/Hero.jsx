import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 15]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Background X */}
            <motion.div
                style={{ y, rotate }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
            >
                <div className="text-[100vw] font-bold text-primary leading-none select-none translate-y-20">
                    X
                </div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h1 className="text-5xl md:text-8xl font-bold font-heading mb-6 leading-tight">
                    WE DON'T JUST CODE. <br />
                    <span className="text-primary glitch" data-text="WE IGNITE STARTUPS.">WE IGNITE STARTUPS.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                    A 3-person special ops team for Design, Dev, and Automation. From 0 to 1, faster than big agencies.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="#work"
                        className="bg-primary text-black px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
                    >
                        View Our Work
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Book a Strategy Call
                    </a>
                </div>
            </div>

            {/* Grid Lines */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </section>
    );
};

export default Hero;
