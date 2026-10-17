import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// 用户站点地址:https://circleshang.github.io/(仓库名 circleshang.github.io)
// 站点在域名根路径,构建和开发都使用 /
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    // 输出到仓库根目录的 docs/,供 GitHub Pages 从 main 分支的 /docs 发布
    outDir: '../docs',
    emptyOutDir: true,
  },
})
