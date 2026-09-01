import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/goltrand-boukoumou.github.io/',
  plugins: [react()],
})
