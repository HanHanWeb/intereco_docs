'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const GrainGradient = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.GrainGradient),
  { ssr: false },
);

export function HeroBackground() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 400);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {show && (
        <GrainGradient
          className="absolute inset-0 animate-fd-fade-in duration-800"
          colors={['#c4edff', '#58c7ff', '#58c7ff20']}
          colorBack="#00000000"
          softness={1}
          intensity={0.9}
          noise={0.5}
          speed={1}
          shape="corners"
          minPixelRatio={1}
          maxPixelCount={1920 * 1080}
        />
      )}
    </div>
  );
}
