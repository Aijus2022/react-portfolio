import fs from 'fs';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles('src');
const entry = {};

allFiles.forEach((file) => {
  const relativePath = path.relative(__dirname, file);
  const entryName = relativePath.replace(/\.(js|jsx)$/, '');
  entry[entryName] = `./${relativePath}`;
});

// Add index.html as an entry point
entry['index.html'] = '/index.html';

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: entry,
      external: ['@testing-library/react', '@testing-library/jest-dom/extend-expect'], // Exclude @testing-library/react and @testing-library/jest-dom/extend-expect from bundle
    },
  },
});
