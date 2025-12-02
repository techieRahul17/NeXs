import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 border-t border-white/10 bg-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-9xl font-bold font-heading mb-12 hover:text-primary transition-colors cursor-pointer tracking-tighter">
                    LET'S TALK.
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-20">
                    <a
                        href="mailto:hello@nexus.dev"
                        className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
                    >
                        <FaEnvelope className="text-xl" />
                        <span className="text-lg font-medium">hello@nexus.dev</span>
                    </a>

                    <a
                        href="tel:+15550123456"
                        className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
                    >
                        <FaPhone className="text-xl" />
                        <span className="text-lg font-medium">+1 (555) 012-3456</span>
                    </a>

                    <a
                        href="#"
                        className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-full hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
                    >
                        <FaLinkedin className="text-xl" />
                        <span className="text-lg font-medium">LinkedIn</span>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 text-gray-500 text-sm uppercase tracking-widest font-medium">
                    <div>© 2024 NEXUS.</div>
                    <div className="mt-4 md:mt-0">DESIGNED & BUILT BY THE SQUAD.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
