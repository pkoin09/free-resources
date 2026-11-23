import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? './' : '/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        courses: 'courses/index.html',
        jobs: 'jobs/index.html',
      },
    },
  },
}))
