import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] z-50 transition-all duration-300 rounded-full ${scrolled ? 'bg-black/90 border border-primary/30 backdrop-blur-md py-3 px-6 shadow-[0_0_20px_rgba(255,46,46,0.2)]' : 'bg-transparent py-6'}`}>
            <div className="flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <Logo className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="text-2xl font-bold font-heading tracking-tighter text-white group-hover:text-primary transition-colors">
                        NEXUS
                    </span>
                </a>

                <div className="hidden md:flex space-x-8 items-center bg-black/40 px-8 py-2 rounded-full border border-primary/10 backdrop-blur-sm">
                    {['Work', 'Services', 'Process'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-all uppercase tracking-widest relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="bg-primary text-black px-6 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,46,46,0.6)] text-sm"
                >
                    Let's Talk
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
