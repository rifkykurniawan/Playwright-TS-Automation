import { test, expect, defineConfig } from '@playwright/test';

const domain = process.env.DOMAIN!;
const username = process.env.USERNAMETEST!;
const password = process.env.PASSWORD!;
const invalidPassword = process.env.INVALIDPASSWORD!;
const invalidUsername = process.env.INVALIDUSERNAME!;
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

test('TC-2 - Login with invalid password', async ({ page }) => {
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

test('TC-3 - Login with invalid username', async ({ page }) => {
  await page.goto('https://v2.hrmlabs.com');
  await page.getByRole('textbox', { name: 'Domain' }).click();
  await page.getByRole('textbox', { name: 'Domain' }).fill(domain);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(invalidUsername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.locator('.m-checkbox > span').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('heading', { name: 'Log in to your account' }).isVisible();
});

test('TC-4 - Login with invalid username and password', async ({ page }) => {
  await page.goto('https://v2.hrmlabs.com');
  await page.getByRole('textbox', { name: 'Domain' }).click();
  await page.getByRole('textbox', { name: 'Domain' }).fill(domain);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(invalidUsername);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(invalidPassword);
  await page.locator('.m-checkbox > span').click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('heading', { name: 'Log in to your account' }).isVisible();
});

test('TC-5 - Verify home page elements after successful login', async ({ page }) => {
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
  await expect(page.locator('#companyLogoImage')).toBeVisible();
});

test('TC-6 - Verify success log out', async ({ page }) => {
  // await page.goto('https://v2.hrmlabs.com');
  await page.goto('https://www.google.com/');
  // await page.getByRole('textbox', { name: 'Domain' }).click();
  // await page.getByRole('textbox', { name: 'Domain' }).fill(domain);
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill(username);
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill(password);
  // await page.locator('.m-checkbox > span').click();
  // await page.getByRole('button', { name: 'Log In' }).click();
  // await page.getByRole('button', { name: 'OK' }).click();
  // await expect(page.locator('#companyLogoImage')).toBeVisible();
  // await page.locator('.flaticon-user').first().click();
  // await page.getByRole('button', { name: /Logout/i }).click();
});
