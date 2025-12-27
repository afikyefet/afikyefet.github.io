import { copyFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

try {
  // Copy index.html to 404.html for GitHub Pages routing
  copyFileSync(
    join(rootDir, 'dist', 'index.html'),
    join(rootDir, 'dist', '404.html')
  );
  console.log('✓ Copied index.html to 404.html');
} catch (error) {
  console.error('Error copying 404.html:', error.message);
  process.exit(1);
}




