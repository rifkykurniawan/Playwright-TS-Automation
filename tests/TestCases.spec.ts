import { test, expect, defineConfig } from '@playwright/test';

const domain = process.env.DOMAIN!;
const username = process.env.USERNAMETEST!;
const password = process.env.PASSWORD!;
const invalidPassword = process.env.INVALIDPASSWORD!;
test('TC-1 - Login with valid credentials', async ({ page }) => {

  await page.goto('https://v2.hrmlabs.com');
  await page.getByRole('textbox', { name: 'Domain' }).click();
  await page.getByRole('textbox', { name: 'Domain' }).fill(domain);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.locator('.m-checkbox > span').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('.m-checkbox > span').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.locator('#companyLogoImage')).toBeVisible();
});

test('TC-2 - Login with invalid credentials', async ({ page }) => {
  await page.goto('https://v2.hrmlabs.com');
  await page.getByRole('textbox', { name: 'Domain' }).click();
  await page.getByRole('textbox', { name: 'Domain' }).fill(domain);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidPassword);
  await page.locator('.m-checkbox > span').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('heading', { name: 'Log in to your account' }).isVisible();
});
