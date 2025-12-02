import React, { useState } from 'react';

const ProcessStep = ({ number, title, description, isHovered, onHover, onLeave }) => (
    <div
        className="relative w-full md:w-64 h-80 perspective-1000 group cursor-pointer"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
            {/* Front */}
            <div className="absolute inset-0 backface-hidden bg-black border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-primary/50 transition-colors">
                <div className={`text-6xl font-bold font-heading mb-4 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-white/20'}`}>
                    0{number}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
                    {title}
                </h3>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-primary rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-black uppercase tracking-widest mb-4">
                    {title}
                </h3>
                <p className="text-black font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const Process = () => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const steps = [
        { title: 'Discovery', description: 'We dive deep into your business goals and user needs.' },
        { title: 'Wireframe', description: 'Blueprinting the structure and flow of your application.' },
        { title: 'Code', description: 'Crafting clean, scalable, and high-performance code.' },
        { title: 'Launch', description: 'Deploying your product to the world with zero downtime.' },
    ];

    return (
        <section id="process" className="py-32 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-20 text-center">
                    THE <span className="text-primary">BLUEPRINT</span>
                </h2>

                <div className="relative flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
                    {/* Background Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 hidden md:block -translate-y-1/2"></div>

                    {/* Dynamic Red Line */}
                    <div
                        className="absolute top-1/2 left-0 h-1 bg-primary hidden md:block -translate-y-1/2 transition-all duration-500 ease-out shadow-[0_0_15px_#FF2E2E]"
                        style={{
                            width: hoveredIndex !== -1 ? `${(hoveredIndex / (steps.length - 1)) * 100}%` : '0%'
                        }}
                    ></div>

                    {steps.map((step, index) => (
                        <ProcessStep
                            key={step.title}
                            number={index + 1}
                            title={step.title}
                            description={step.description}
                            isHovered={hoveredIndex >= index}
                            onHover={() => setHoveredIndex(index)}
                            onLeave={() => setHoveredIndex(-1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
