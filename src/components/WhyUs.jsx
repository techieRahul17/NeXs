import React from 'react';

const WhyUs = () => {
    return (
        <section className="py-20 bg-black border-y border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        WHY A TEAM <br /> OF <span className="text-primary">3?</span>
                    </h2>
                </div>
                <div className="md:w-1/2">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed border-l-4 border-primary pl-6">
                        Big agencies are slow. We are agile. You work directly with the founders, not account managers. We Design, Build, and Deliver without the fluff.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
