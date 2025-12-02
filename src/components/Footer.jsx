import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl md:text-9xl font-bold font-heading mb-10 hover:text-primary transition-colors cursor-pointer tracking-tighter">
                    LET'S TALK.
                </h2>

                <a href="mailto:hello@nexus.dev" className="text-xl md:text-3xl text-gray-400 hover:text-white transition-colors mb-12 block">
                    hello@nexus.dev
                </a>

                <div className="flex justify-center gap-6 mb-20">
                    {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, index) => (
                        <a
                            key={index}
                            href="#"
                            className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center text-2xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                <div className="text-gray-600 text-sm uppercase tracking-widest">
                    © 2024 NEXUS. Since Day One.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
