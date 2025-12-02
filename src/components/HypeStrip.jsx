import React from 'react';

const HypeStrip = () => {
    return (
        <div className="bg-primary py-4 overflow-hidden border-y-2 border-black -rotate-1 z-20 relative">
            <div className="whitespace-nowrap animate-marquee inline-block">
                <span className="text-black font-bold text-3xl md:text-5xl font-heading mx-4">
                    WEB DEVELOPMENT • MOBILE APPS • UI/UX • AUTOMATION • WEB DEVELOPMENT • MOBILE APPS • UI/UX • AUTOMATION •
                </span>
                <span className="text-black font-bold text-3xl md:text-5xl font-heading mx-4">
                    WEB DEVELOPMENT • MOBILE APPS • UI/UX • AUTOMATION • WEB DEVELOPMENT • MOBILE APPS • UI/UX • AUTOMATION •
                </span>
            </div>
        </div>
    );
};

export default HypeStrip;
