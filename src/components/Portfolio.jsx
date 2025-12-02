import React from 'react';

const ProjectCard = ({ title, category, image }) => (
    <div className="group relative overflow-hidden border border-white/10 cursor-none">
        <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold font-heading text-white">{title}</h3>
                <p className="text-primary uppercase tracking-widest text-sm">{category}</p>
            </div>
        </div>
        {/* Custom Cursor Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
            <div className="bg-primary text-black px-4 py-2 font-bold uppercase transform rotate-12">View Case Study</div>
        </div>
    </div>
);

const Portfolio = () => {
    return (
        <section id="work" className="py-20 bg-dark">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-12 text-right">
                    RECENT <span className="text-primary">DEPLOYMENTS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProjectCard
                        title="FinTech Dashboard"
                        category="Web App"
                        image="https://placehold.co/600x400/111/FF2E2E?text=FinTech+Dashboard"
                    />
                    <ProjectCard
                        title="E-Commerce App"
                        category="Mobile"
                        image="https://placehold.co/600x400/111/FF2E2E?text=E-Commerce"
                    />
                    <ProjectCard
                        title="AI SaaS Platform"
                        category="SaaS"
                        image="https://placehold.co/600x400/111/FF2E2E?text=AI+Platform"
                    />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
