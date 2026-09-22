import React from 'react';

export function VTLogoIcon({ className = 'w-10 h-10' }) {
  return (
    <div className={`relative rounded-full bg-white flex items-center justify-center p-1 shadow-md shrink-0 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Red Swoosh Arc */}
        <path
          d="M25 45 C30 18, 70 15, 82 48 C85 57, 80 75, 55 82"
          stroke="#E53935"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Wing Left */}
        <path d="M28 38 H44 L40 45 H25 Z" fill="#78909C" />
        <path d="M30 46 H44 L42 53 H27 Z" fill="#90A4AE" />

        {/* Wing Right */}
        <path d="M56 38 H72 L75 45 H60 Z" fill="#78909C" />
        <path d="M56 46 H70 L73 53 H58 Z" fill="#90A4AE" />

        {/* Golden Y Structure */}
        <path d="M42 34 H58 L52 56 V70 H48 V56 Z" fill="#F59E0B" />
        <rect x="42" y="52" width="16" height="5" fill="#DC2626" rx="1.5" />

        {/* VT Groups Text inside circle */}
        <text
          x="50"
          y="85"
          textAnchor="middle"
          fill="#1E293B"
          fontSize="11"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          VT Groups
        </text>
      </svg>
    </div>
  );
}

export default function Logo({ size = 'md' }) {
  return (
    <a href="#hero" className="flex items-center gap-3 group">
      <VTLogoIcon className={size === 'lg' ? 'w-12 h-12' : size === 'sm' ? 'w-9 h-9' : 'w-10 h-10'} />
      <div className="flex flex-col justify-center">
        <span className="font-sans font-extrabold tracking-tight text-terracotta-600 block leading-none text-xl sm:text-2xl">
          Sanjeevini Estates
        </span>
        <span className="font-sans font-bold text-amber-500 tracking-wider text-xs uppercase block mt-0.5">
          VT Groups
        </span>
      </div>
    </a>
  );
}
