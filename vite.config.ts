import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        icon: 'https://www.bilibili.com/favicon.ico',
        namespace: 'npm/vite-plugin-monkey',
        match: [
          '*://www.bilibili.com/video/av*',
          '*://www.bilibili.com/bangumi/play/ep*',
          '*://www.bilibili.com/bangumi/play/ss*',
          '*://www.bilibili.com/video/BV*',
        ],
      },
    }),
  ],
})
