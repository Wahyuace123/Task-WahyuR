import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

test('Login Kumparan', async ({ page }) => {
  test.setTimeout(90000);

  // 1. Buka Kumparan & Klik Masuk
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  await page.pause(); 
 }); 