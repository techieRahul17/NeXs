import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaRobot } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, className }) => (
    <div className={`glass-panel p-8 rounded-3xl hover:border-primary/50 transition-all duration-500 group hover:-translate-y-2 ${className}`}>
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
            {icon}
        </div>
        <h3 className="text-2xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-bold font-heading mb-4">
                        OUR <span className="text-gradient">ARSENAL</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Everything you need to launch and scale. Nothing you don't.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard
                        icon={<FaCode />}
                        title="MERN Stack Dev"
                        description="Scalable, fast, and bulletproof web apps built with modern architecture."
                        className="md:col-span-2"
                    />
                    <ServiceCard
                        icon={<FaMobileAlt />}
                        title="Mobile Experience"
                        description="iOS & Android apps that feel like magic in your hands."
                    />
                    <ServiceCard
                        icon={<FaPaintBrush />}
                        title="UI/UX & Brand"
                        description="Design that investors love and users can't forget."
                    />
                    <ServiceCard
                        icon={<FaRobot />}
                        title="Automation"
                        description="We connect APIs so you can sleep while your business runs itself."
                        className="md:col-span-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
