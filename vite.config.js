import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Use array form so we can match more specific paths first
    alias: [
      // Map imports like '@/components/ui/button' -> 'src/ui/button.jsx'
      { find: /^@\/components\/ui\/(.*)/, replacement: path.resolve(__dirname, 'src/ui') + '/$1' },
      // Fallback for '@/...' -> 'src/...'
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
