import { chromium, devices } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../screenshots');
await mkdir(OUT, { recursive: true });

const BASE = process.env.BASE ?? 'https://sergjio-music.vercel.app';
const ROUTES = ['/de', '/de/about', '/de/dj', '/de/releases', '/de/tour', '/de/booking'];

const VIEWPORTS = [
  { name: 'desktop', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, isMobile: false },
  { name: 'mobile', ...devices['iPhone 14'] },
];

const browser = await chromium.launch();
for (const v of VIEWPORTS) {
  const ctx = await browser.newContext({
    viewport: v.viewport,
    deviceScaleFactor: v.deviceScaleFactor,
    isMobile: v.isMobile,
    userAgent: v.userAgent,
  });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    const url = BASE + route;
    const safe = route.replace(/\W+/g, '_').replace(/^_|_$/g, '') || 'home';
    const file = `${OUT}/${v.name}__${safe}.png`;
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: file, fullPage: true });
      console.log(`OK  ${v.name} ${route} -> ${file}`);
    } catch (e) {
      console.log(`ERR ${v.name} ${route}: ${e.message}`);
    }
  }
  await ctx.close();
}
await browser.close();
