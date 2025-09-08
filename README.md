# 个人网站

> 一个现代化的个人简历网站，展示AI产品经理的专业经历与技能

## 🌟 项目简介

这是一个基于 Next.js 14 构建的现代化个人网站，专为AI产品经理候选人覃泽涛设计。网站采用响应式设计，支持深色模式，并针对中文字体显示进行了优化。

### ✨ 主要特性

- 🎨 **现代化设计**：基于 Tailwind CSS 和 Radix UI 组件库
- 📱 **完全响应式**：适配桌面端、平板和移动设备
- 🌙 **深色模式支持**：使用 next-themes 实现主题切换
- ⚡ **性能优化**：静态站点生成（SSG），加载速度极快
- 🎭 **动画效果**：使用 Framer Motion 实现流畅的页面动画
- 🔤 **中文字体优化**：针对中文显示进行特别优化
- 📊 **数据驱动**：模块化的数据管理，易于维护和更新

## 🛠️ 技术栈

### 核心框架
- **Next.js 14** - React 全栈框架
- **React 18** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### 样式与UI
- **Tailwind CSS 4** - 原子化CSS框架
- **Radix UI** - 无障碍的UI组件库
- **Framer Motion** - 动画库
- **Lucide React** - 图标库

### 开发工具
- **PostCSS** - CSS 后处理器
- **ESLint** - 代码质量检查
- **Geist Font** - 现代化字体

## 📁 项目结构

```
personal-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # React 组件
│   ├── ui/               # 基础UI组件
│   ├── hero-section.tsx  # 英雄区域
│   ├── about-section.tsx # 关于我
│   ├── experience-section.tsx # 实习经历
│   ├── projects-section.tsx   # 项目经历
│   ├── education-section.tsx  # 教育经历
│   ├── interests-section.tsx   # 兴趣爱好
│   ├── navigation.tsx    # 导航组件
│   └── footer.tsx        # 页脚组件
├── lib/                  # 工具库
│   ├── data.ts          # 个人数据
│   └── utils.ts         # 工具函数
├── hooks/               # 自定义 Hooks
├── public/              # 静态资源
├── next.config.mjs      # Next.js 配置
├── netlify.toml         # Netlify 部署配置
└── package.json         # 项目依赖
```

## 🚀 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm、yarn 或 pnpm 包管理器

### 安装依赖

```bash
# 使用 npm
npm install

# 使用 yarn
yarn install

# 使用 pnpm
pnpm install
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 或使用其他包管理器
yarn dev
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
# 构建项目
npm run build

# 导出静态文件
npm run export

# 启动生产服务器
npm start
```

## 📝 内容管理

网站内容通过 `lib/data.ts` 文件进行管理，包含以下信息：

- **个人信息**：姓名、职位、联系方式
- **关于我**：技能关键词、常用工具
- **实习经历**：
- **项目经历**：
- **教育背景**：
- **兴趣爱好**：

### 更新内容

1. 编辑 `lib/data.ts` 文件
2. 修改对应的数据对象
3. 保存文件，开发服务器会自动重新加载

## 🌐 部署

### Netlify 部署（推荐）

项目已配置 Netlify 自动部署：

1. 将代码推送到 GitHub 仓库
2. 在 Netlify 中连接 GitHub 仓库
3. 构建设置会自动从 `netlify.toml` 读取：
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`
   - Node version: `18`

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 手动部署

```bash
# 构建静态文件
npm run build
npm run export

# 将 out/ 目录上传到任何静态文件托管服务
```

## 🎨 自定义样式

### 主题配置

- 颜色主题在 `app/globals.css` 中定义
- 支持亮色和深色模式
- 使用 CSS 变量实现主题切换

### 字体优化

项目针对中文显示进行了特别优化：

```css
/* 小字体优化 */
.text-xs {
  font-size: 0.75rem;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: 0.01em;
}
```

### 响应式设计

使用 Tailwind CSS 的响应式前缀：

- `sm:` - 640px 及以上
- `md:` - 768px 及以上
- `lg:` - 1024px 及以上
- `xl:` - 1280px 及以上

## 📊 性能优化

- **静态生成**：使用 Next.js 静态导出
- **图片优化**：配置 `unoptimized: true` 适配静态部署
- **代码分割**：自动按路由分割代码
- **字体优化**：使用系统字体栈减少加载时间
- **CSS优化**：Tailwind CSS 自动清除未使用的样式

## 🔧 开发指南

### 添加新组件

1. 在 `components/` 目录创建新组件
2. 使用 TypeScript 定义组件类型
3. 遵循现有的命名约定
4. 在需要的地方导入使用

### 修改样式

1. 优先使用 Tailwind CSS 类名
2. 自定义样式添加到 `app/globals.css`
3. 使用 CSS 变量保持主题一致性

### 数据更新

1. 编辑 `lib/data.ts` 中的数据对象
2. 保持数据结构的一致性
3. 添加新字段时更新对应的 TypeScript 类型

## 📱 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)
- 移动端浏览器

## 📄 许可证

本项目仅用于个人展示目的。

## 👨‍💻 作者

**覃泽涛** - AI 产品经理候选人

- 📧 Email: 2630115901@qq.com
- 📱 Phone: 17774374619
- 🎓 湖南大学硕士在读

---

如有任何问题或建议，欢迎联系！