import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages 项目站点地址:https://circleshang.github.io/for-cursor-learing/
// 构建时资源需要带仓库名前缀,开发时仍然使用 /
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/for-cursor-learing/' : '/',
  plugins: [react()],
  build: {
    // 输出到仓库根目录的 docs/,供 GitHub Pages 从 main 分支的 /docs 发布
    outDir: '../docs',
    emptyOutDir: true,
  },
}))
