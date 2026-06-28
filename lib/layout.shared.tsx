import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <Image
          src="https://intereco.cn-nb1.rains3.com/basic/logo.png"
          alt="Intereco Docs"
          width={120}
          height={32}
          style={{ width: 'auto', height: '32px' }}
          unoptimized
        />
      ),
    },
  };
}
