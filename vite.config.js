import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  server: {
    host: true,
    allowedHosts: [
      'overconservative-pseudoacademic-maci.ngrok-free.dev'
      // You can add more hosts here if needed in the future
    ],
  },
})
