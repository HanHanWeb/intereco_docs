'use client';

import Link from 'next/link';
import { useState } from 'react';

export function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`flex flex-col p-6 rounded-2xl backdrop-blur-md transition-all duration-300 ${
        hovered
          ? 'bg-white/80 dark:bg-zinc-800/80'
          : 'bg-white/60 dark:bg-zinc-800/60'
      } ${
        hovered
          ? 'shadow-[inset_0_0_0_1.5px_#35b7ff,0_2px_8px_rgba(0,0,0,0.06)]'
          : 'shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#35b7ff]/10 text-[#35b7ff] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{description}</p>
      <Link
        href={href}
        className="text-sm font-medium text-[#35b7ff] hover:text-[#29a3e8] inline-flex items-center gap-1"
      >
        浏览文档
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
