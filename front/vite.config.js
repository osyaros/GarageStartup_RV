import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Настройка для включения файлов в сборку
      assetsInclude: ['**/*.ttf', '**/*.woff2']
    }
  }
})
