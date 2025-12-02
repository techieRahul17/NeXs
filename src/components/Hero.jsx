import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Visible Red/Black Gradient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Rich Red/Black Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#050505] to-[#2a0000]"></div>

                {/* Animated Red Glows */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-[#FF2E2E] rounded-full mix-blend-screen filter blur-[150px] opacity-20"
                ></motion.div>

                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#800000] rounded-full mix-blend-screen filter blur-[120px] opacity-20"
                ></motion.div>
            </div>

            {/* Fine Grain Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-9xl font-semibold font-heading mb-8 leading-tight tracking-tight text-white">
                        WE DON'T JUST CODE. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#500000]">WE IGNITE.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide"
                >
                    A 3-person special ops team for <span className="text-primary">Design</span>, <span className="text-primary">Dev</span>, and <span className="text-primary">Automation</span>. <br />
                    From 0 to 1, faster than big agencies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-center gap-8"
                >
                    <a
                        href="#work"
                        className="bg-gradient-to-r from-primary to-[#800000] text-white px-10 py-4 text-lg font-semibold rounded-full hover:shadow-[0_0_20px_rgba(255,46,46,0.4)] transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-white/20"
                    >
                        View Our Work
                    </a>
                    <a
                        href="#contact"
                        className="border border-white/20 text-white px-10 py-4 text-lg font-semibold rounded-full hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                    >
                        Book a Strategy Call
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
