import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '界面生态文档',
    template: '%s | 界面生态文档',
  },
  description: '界面生态 - 国内最大的 PPT OS 创意社区文档中心',
  icons: {
    icon: 'https://intereco.cn-nb1.rains3.com/basic/favicon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
