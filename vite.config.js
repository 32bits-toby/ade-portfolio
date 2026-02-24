import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html'),
        project: resolve(__dirname, 'project.html'),
        skills: resolve(__dirname, 'skills.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
