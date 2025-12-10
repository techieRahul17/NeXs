import React, { useState, useRef } from 'react';
import { FaGithub, FaCamera } from 'react-icons/fa';

const TeamCard = ({ name, role, github, defaultImage }) => {
    const [image, setImage] = useState(defaultImage);
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary hover:to-primary/20 transition-all duration-500 group">
            <div className="bg-black rounded-[23px] p-8 text-center h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                    className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary transition-colors duration-500 relative z-10 cursor-pointer group/image"
                    onClick={handleImageClick}
                >
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                        <FaCamera className="text-white text-2xl" />
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept="image/*"
                    />
                </div>

                <div className="relative z-10">
                    <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-primary transition-colors">{name}</h3>
                    <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">{role}</p>

                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-2 rounded-full hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 text-sm font-bold uppercase tracking-wide"
                    >
                        <FaGithub /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

const WhyUs = () => {
    const team = [
        {
            name: "Rahul V S",
            role: "Lead Developer & Architect",
            github: "https://github.com/techieRahul17",
            defaultImage: "https://ui-avatars.com/api/?name=Rahul+V+S&background=random"
        },
        {
            name: "Adhithya R",
            role: "Full Stack Engineer",
            github: "https://github.com/Adhi-1004",
            defaultImage: "https://ui-avatars.com/api/?name=Adhithya+R&background=random"
        },
        {
            name: "Sharvesh Ram K S",
            role: "UI/UX & Frontend Wizard",
            github: "https://github.com/Sharu1425",
            defaultImage: "https://ui-avatars.com/api/?name=Sharvesh+Ram+K+S&background=random"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight">
                            WHY <br /> TEAM <span className="text-primary">NEXUS?</span>
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed border-l-4 border-primary pl-6">
                            Big agencies are slow. We are agile. You work directly with the founders, not account managers. We Design, Build, and Deliver without the fluff.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-primary mb-2">3x</h3>
                            <p className="text-gray-400 uppercase tracking-widest text-sm">Faster Delivery</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                            <p className="text-gray-400 uppercase tracking-widest text-sm">Founder Access</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors md:col-span-2">
                            <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                            <p className="text-gray-400 uppercase tracking-widest text-sm">Support & Maintenance</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-3xl font-bold font-heading text-center mb-16 tracking-widest">MEET THE <span className="text-primary">SQUAD</span></h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
