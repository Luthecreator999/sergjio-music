import { chromium, devices } from 'playwright';
const browser = await chromium.launch();
const ctx = await browser.newContext({ ...devices['iPhone 14'] });
const page = await ctx.newPage();
await page.goto('https://sergjiomusic.ch/de', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1000);
const tile = page.locator('a[href*="instagram.com"]').first();
await tile.scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
const box = await tile.boundingBox();
const y = Math.max(0, box.y - 80);
await page.screenshot({
  path: '/Users/lu/Desktop/Sergjio/screenshots/mobile__social-zoom.png',
  clip: { x: 0, y, width: 390, height: 900 },
});
await browser.close();
