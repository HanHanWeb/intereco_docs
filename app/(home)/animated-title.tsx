'use client';

import { useEffect, useState } from 'react';

const words = ['最大的', '领先的', '优质的'];

export function FloatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="text-[#35b7ff] font-medium inline-grid" style={{ gridTemplateAreas: '"word"' }}>
      {words.map((word, i) => (
        <span
          key={word}
          style={{
            gridArea: 'word',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
