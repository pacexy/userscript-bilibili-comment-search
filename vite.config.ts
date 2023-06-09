import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: {
          '': 'Bilibili 评论搜索',
          en: 'Bilibili Comment Search',
          zh: 'Bilibili 评论搜索',
        },
        description: {
          '': '让 Bilibili 支持评论搜索。',
          en: 'Add comment searching support in Bilibili.',
          zh: '让 Bilibili 支持评论搜索。',
        },
        icon: 'https://www.bilibili.com/favicon.ico',
        namespace: 'npm/vite-plugin-monkey',
        match: [
          '*://www.bilibili.com/video/av*',
          '*://www.bilibili.com/bangumi/play/ep*',
          '*://www.bilibili.com/bangumi/play/ss*',
          '*://www.bilibili.com/video/BV*',
        ],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr(
            'ReactDOM',
            'umd/react-dom.production.min.js'
          ),
        },
      },
    }),
  ],
})
