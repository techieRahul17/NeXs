import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll'; 
// Actually, I didn't install react-scroll. I'll use standard <a href="#id"> and CSS scroll-behavior: smooth.
// But wait, user asked for react-router-dom. 
// If I use react-router-dom, I can use HashLink or just standard anchors if it's all on one page.
// I'll use standard anchors for now.

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-heading tracking-tighter hover:text-primary transition-colors">
                    NEXUS
                </a>

                <div className="hidden md:flex space-x-8 items-center">
                    {['Work', 'Services', 'Process'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="bg-primary text-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                >
                    Start a Project
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
