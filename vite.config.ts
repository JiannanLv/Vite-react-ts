import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import urlToModule from 'rollup-plugin-import-meta-url-to-module'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    react(),
    {
      ...viteMockServe(),
      apply: 'serve', // 开发时应用
    },
    urlToModule(),
  ],
})
