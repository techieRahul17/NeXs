import React from 'react';

const ProjectCard = ({ title, category, image }) => (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">{category}</p>
            <h3 className="text-3xl font-bold font-heading text-white mb-4">{title}</h3>
            <div className="flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <span>View Case Study</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>
        </div>
    </div>
);

const Portfolio = () => {
    return (
        <section id="work" className="py-32">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-7xl font-bold font-heading mb-4">
                            RECENT <span className="text-gradient">DROPS</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Digital products that make a dent in the universe.
                        </p>
                    </div>
                    <a href="#" className="text-white border-b border-primary pb-1 hover:text-primary transition-colors">View All Projects</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProjectCard
                        title="FinTech Dashboard"
                        category="Web App"
                        image="https://placehold.co/600x800/111/FF2E2E?text=FinTech+Dashboard"
                    />
                    <ProjectCard
                        title="E-Commerce App"
                        category="Mobile"
                        image="https://placehold.co/600x800/111/4F46E5?text=E-Commerce"
                    />
                    <ProjectCard
                        title="AI SaaS Platform"
                        category="SaaS"
                        image="https://placehold.co/600x800/111/EC4899?text=AI+Platform"
                    />
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
