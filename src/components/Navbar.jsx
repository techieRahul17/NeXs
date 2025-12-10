import React, { useState, useEffect } from 'react';
import Logo from './Logo';

import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

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
                <Link to="/" className="flex items-center gap-2 group">
                    <Logo className="w-8 h-8 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="text-2xl font-bold font-heading tracking-tighter text-white group-hover:text-primary transition-colors">
                        NEXUS
                    </span>
                </Link>

                <div className="hidden md:flex space-x-8 items-center bg-black/40 px-8 py-2 rounded-full border border-primary/10 backdrop-blur-sm">
                    {[
                        { name: 'Work', path: '/#work' },
                        { name: 'Services', path: '/#services' },
                        { name: 'Process', path: '/#process' },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className="text-sm font-medium text-gray-300 hover:text-primary transition-all uppercase tracking-widest relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {user ? (
                    <Link
                        to="/dashboard"
                        className="bg-primary text-black px-6 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,46,46,0.6)] text-sm"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <div className="flex items-center gap-4">
                        <Link
                            to="/login"
                            className="text-sm font-medium text-white hover:text-primary transition-colors uppercase tracking-widest hidden md:block"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-primary text-black px-6 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,46,46,0.6)] text-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
