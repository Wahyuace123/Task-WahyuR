import { test, expect } from '@playwright/test';

test('Login Kumparan with Manual Cloudflare', async ({ page }) => {
  test.setTimeout(90000);

  // 1. Buka Kumparan & Klik Masuk
  await page.goto('https://kumparan.com/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('navigation', { name: 'user menu' }).getByRole('button', { name: 'Masuk' }).click();

  // 2. Isi form login dengan pengetikan natural
  const email = page.getByPlaceholder('Email', { exact: false });
  const password = page.getByPlaceholder('Password', { exact: false });

  await email.pressSequentially('wahyu@example.com', { delay: 100 });
  await password.pressSequentially('password_uji', { delay: 120 });

  // 3. Jeda untuk verifikasi manual Cloudflare Turnstile
  console.log('👉 Silakan centang "Verify you are human" di browser secara manual...');
  await page.waitForTimeout(40000);

  // 4. Klik tombol submit jika sudah aktif
  const submitBtn = page.locator('[data-qa-id="btn-save"]');
  if (await submitBtn.isEnabled()) {
    await submitBtn.click();
  }

  await page.waitForTimeout(3000);
});