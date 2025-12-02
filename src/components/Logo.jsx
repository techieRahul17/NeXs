import React from 'react';

const Logo = ({ className }) => (
    <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M20 20L80 80M80 20L20 80" stroke="#FF2E2E" strokeWidth="15" strokeLinecap="square" />
    </svg>
);

export default Logo;
