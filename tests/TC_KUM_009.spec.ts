import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

test('Login Kumparan', async ({ page }) => {
  test.setTimeout(90000);

  // 1. Buka Kumparan & Klik Masuk
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('navigation', { name: 'user menu' }).getByRole('button', { name: 'Masuk' }).click();

  // 2. Isi Email & Password dengan jeda ketik halus
  const emailInput = page.getByPlaceholder('Email', { exact: false });
  const passwordInput = page.getByPlaceholder('Password', { exact: false });

  await emailInput.pressSequentially('Wahyu', { delay: 100 });
  await passwordInput.pressSequentially('123456789', { delay: 100 });



  await page.waitForTimeout(3000);
});