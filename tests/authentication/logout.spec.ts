import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

const domain = process.env.DOMAIN!;
const username = process.env.USERNAMETEST!;
const password = process.env.PASSWORD!;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.login(domain, username, password, true);
  await expect(dashboardPage.companyLogo).toBeVisible();
});

test('AUTH-001-Logout-Verify success log out', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.logout(true);
  await expect(dashboardPage.chooseAccountHeading).toBeVisible();
});
