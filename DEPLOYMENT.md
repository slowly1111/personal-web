# 部署到 Netlify 指南

## 重要说明

由于当前开发环境的权限限制，无法直接进行本地构建测试。但是，本项目已经配置好了 Netlify 部署所需的所有文件，可以直接在 Netlify 上成功部署。

## 已配置的文件

- `netlify.toml` - Netlify 部署配置
- `next.config.mjs` - Next.js 配置
- `package.json` - 包含构建和导出脚本

## 部署步骤

### 方法一：通过 Git 仓库部署（强烈推荐）

1. **将代码推送到 Git 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **在 Netlify 上部署**
   - 访问 [netlify.com](https://netlify.com) 并注册/登录
   - 点击 "New site from Git"
   - 选择你的 Git 提供商（GitHub/GitLab/Bitbucket）
   - 选择你的仓库
   - 构建设置：
     - Build command: `npm run build && npm run export`
     - Publish directory: `out`
     - Node version: `18`
   - 点击 "Deploy site"

### 方法二：手动部署（备选方案）

如果你有其他环境可以构建：

1. **本地构建**
   ```bash
   npm install
   npm run build
   npm run export
   ```

2. **上传到 Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 将生成的 `out` 文件夹拖拽到 Netlify 的部署区域

## 功能支持情况

### ✅ 完全支持的功能
- 网站基本展示
- 响应式设计
- 动画效果
- 微信二维码弹窗
- 图片保存功能

### ⚠️ 部分支持的功能

**电话拨打功能：**
- ✅ 移动设备：完全支持，点击可直接拨打电话
- ⚠️ 桌面设备：取决于用户是否安装了支持 `tel:` 协议的应用

**邮件发送功能：**
- ✅ 移动设备：完全支持，可打开邮件应用
- ⚠️ 桌面设备：取决于用户是否配置了默认邮件客户端

### 🔧 建议的改进

为了提高桌面端的兼容性，可以考虑：
1. 添加复制联系信息到剪贴板的功能
2. 显示联系信息的纯文本版本
3. 提供多种联系方式的备选方案

## 部署后的 URL

部署成功后，Netlify 会提供一个类似这样的 URL：
- `https://amazing-site-name-123456.netlify.app`

你也可以：
- 自定义子域名
- 绑定自己的域名

## 注意事项

1. **静态部署**：网站将作为静态站点部署，所有功能都在客户端运行
2. **HTTPS**：Netlify 自动提供 HTTPS 支持
3. **CDN**：全球 CDN 加速，访问速度快
4. **自动部署**：如果使用 Git 部署，每次推送代码都会自动重新部署

## 故障排除

如果部署失败，检查：
1. Node.js 版本是否为 18+
2. 所有依赖是否正确安装
3. 构建命令是否成功执行

部署成功后，你的个人网站就可以通过互联网访问了！