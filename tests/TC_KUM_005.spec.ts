import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

chromium.use(stealth());

test('Login Kumparan', async ({ page }) => {
  test.setTimeout(90000);

  // 1. Buka Kumparan & Klik Masuk
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('navigation', { name: 'user menu' }).getByRole('button', { name: 'Masuk' }).click();


  // 2. Temukan kolom input pencarian
  // Kita bisa menggunakan locator 'input[type="text"]' atau berdasarkan placeholder jika ada
  const searchInput = page.locator('input[type="text"]').first();

  // Pastikan kolom pencarian terlihat
  await expect(searchInput).toBeVisible({ timeout: 10000 });

  // 3. Klik, ketik kata kunci pencarian (misal: "Tekno"), lalu tekan Enter
  await searchInput.click();
  await searchInput.pressSequentially('adshajsdajakdhjadqihdqudjadhajkd', { delay: 100 });
  
  // Menekan tombol Enter untuk memicu pencarian
  await page.keyboard.press('Enter');

  console.log('Kata kunci pencarian berhasil diketik dan Enter ditekan!');

  // 4. Tunggu beberapa detik untuk melihat hasil pencarian di browser
  await page.waitForTimeout(4000);

  await page.pause();
});