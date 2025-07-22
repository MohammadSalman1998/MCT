import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: [
    '**/*.glb',
    '**/*.gltf',
    '**/*.fbx',
    '**/*.obj',
    '**/*.mtl',
    '**/*.hdr',
    '**/*.exr'
  ],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
