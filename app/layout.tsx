import type React from "react"
import type { Metadata } from "next"
// 使用系统字体，无需导入特定字体包
// import { Analytics } from "@vercel/analytics/next" // 移除未安装的包
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "覃泽涛 · AI 产品经理候选人",
  description: "专注于AI驱动的产品创新与用户体验优化的产品经理候选人",
  generator: "v0.app",
  keywords: "AI产品经理,产品策划,用户体验,数据分析,人工智能,产品创新",
  authors: [{ name: "覃泽涛" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "覃泽涛 · AI 产品经理候选人",
    description: "专注于AI驱动的产品创新与用户体验优化的产品经理候选人",
    type: "website",
    locale: "zh_CN",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
