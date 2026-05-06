import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push('JS: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errors.push('Console: ' + m.text()); });
page.on('requestfailed', r => errors.push('Failed: ' + r.url() + ' — ' + r.failure()?.errorText));

await page.goto('https://sergjio-music.vercel.app/de/dj', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(5000); // give SoundCloud iframe time to render visually
await page.screenshot({ path: '/Users/lu/Desktop/Sergjio/screenshots/dj-debug.png', fullPage: true });

const sc = await page.locator('iframe[src*="soundcloud"]').first();
const box = await sc.boundingBox();
console.log('iframe bbox:', JSON.stringify(box));
console.log('iframe count:', await page.locator('iframe[src*="soundcloud"]').count());
console.log('errors:', JSON.stringify(errors, null, 2));

await browser.close();
