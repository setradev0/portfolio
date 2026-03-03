import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});

const page = await browser.newPage();
const filePath = path.join(__dirname, 'cv-franckie.html');
await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: path.join(__dirname, 'CV-Franckie-RAKOTONIRINA.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log('PDF generated: CV-Franckie-RAKOTONIRINA.pdf');
