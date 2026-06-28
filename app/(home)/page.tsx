import Link from 'next/link';
import { HeroBackground } from './hero-bg';
import { FeatureCard } from './feature-card';
import { FloatingText } from './animated-title';

export default function HomePage() {
  return (
    <div className="relative min-h-[750px] overflow-hidden mx-auto w-full max-w-[1600px] rounded-[2rem]">
      <HeroBackground />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[750px] px-4 py-20 md:px-12">
        {/* 标题区域 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight max-w-3xl mb-8">
          界面生态是国内<FloatingText />
          <br />
          PPTOS 创意社区
        </h1>

        {/* 按钮区域 */}
        <div className="flex flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/docs/community"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors bg-[#49bdff] text-white dark:text-black hover:bg-[#3aa8e8]"
          >
            从此开始
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/docs/community"
            className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-700"
          >
            产品官网
          </Link>
        </div>

        {/* 三张功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5-1.253" />
              </svg>
            }
            title="社区文档"
            description="加入界面生态社区，获取最新的平台动态、用户指南与协作资源。"
            href="/docs/community"
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            title="每周挑战"
            description="每周更新的设计挑战题目与灵感参考，保持创意手感不断档。"
            href="/docs/weekly"
          />
          <FeatureCard
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            title="IPOA 赛事文档"
            description="界面生态 PPTOS 创意设计大赛指南，涵盖赛制、评分与报名全攻略。"
            href="/docs/ipoa-contest"
          />
        </div>
      </div>
    </div>
  );
}
