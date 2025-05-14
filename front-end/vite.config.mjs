import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
<<<<<<< HEAD
=======
  server: {
    host: '0.0.0.0',
    port: 8080
  },
>>>>>>> 138c4ae (sss)
  plugins: [
    tailwindcss(),
  ],
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
<<<<<<< HEAD
  },
  server: {
    port: 5173, // default Vite port
=======
>>>>>>> 138c4ae (sss)
  }
});
