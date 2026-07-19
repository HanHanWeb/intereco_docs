import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/fuma-nama/fumadocs',
    themeSwitch: {
      enabled: true,
    },
    links: [
      {
        text: <span className="text-base">官网</span>,
        url: 'https://interver.cn',
        external: true,
      },
      {
        text: <span className="text-base">社区</span>,
        url: 'https://www.intereco.org.cn/',
        external: true,
      },
    ],
    nav: {
      title: (
        <Image
          src="https://intereco.cn-nb1.rains3.com/basic/logo.png"
          alt="界面生态文档"
          width={120}
          height={32}
          style={{ width: 'auto', height: '32px' }}
          unoptimized
        />
      ),
    },
  };
}
