import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react'
import talwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
     talwindcss()
    ],
  })