import { test, expect } from '@playwright/test';

test('Login Kumparan', async ({ page }) => {
  test.setTimeout(90000);

  // 1. Buka Kumparan
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });

  // 2. Klik tombol "Masuk" (atau ganti jadi 'Buat Tulisan' jika itu yang dimaksud)
  await page.getByRole('button', { name: 'Buat tulisan' }).click();

  // Atau jika itu tombol "Buat Tulisan":
  // await page.getByRole('button', { name: 'Buat Tulisan' }).click();

  await page.pause();
});