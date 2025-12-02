import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaRobot } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, className }) => (
    <div className={`bg-black border border-white/10 p-8 hover:border-primary transition-colors duration-300 group ${className}`}>
        <div className="text-primary text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold font-heading mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Services = () => {
    return (
        <section id="services" className="py-20 bg-dark relative">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-12 text-center">
                    OUR <span className="text-primary">ARSENAL</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ServiceCard
                        icon={<FaCode />}
                        title="MERN Stack Dev"
                        description="Scalable, fast, and bulletproof web apps."
                        className="md:col-span-2"
                    />
                    <ServiceCard
                        icon={<FaMobileAlt />}
                        title="Mobile Experience"
                        description="iOS & Android apps that feel like magic."
                    />
                    <ServiceCard
                        icon={<FaPaintBrush />}
                        title="UI/UX & Brand"
                        description="Design that investors love."
                    />
                    <ServiceCard
                        icon={<FaRobot />}
                        title="Automation"
                        description="We connect APIs so you can sleep."
                        className="md:col-span-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
