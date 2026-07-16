import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { qase } from 'playwright-qase-reporter';


const domain = process.env.DOMAIN!;
const username = process.env.USERNAMETEST!;
const password = process.env.PASSWORD!;
const invalidPassword = process.env.INVALIDPASSWORD!;
const invalidUsername = process.env.INVALIDUSERNAME!;

test.describe('authentication', () => {
  test('TC-1 - Login with valid credentials', async ({ page }) => {
    qase.id(1)
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
  
    await loginPage.login(domain, username, password, true);
    await expect(dashboardPage.companyLogo).toBeVisible();
  });
  
  test('TC-2 - Login with invalid password', async ({ page }) => {
    qase.id(9)
    const loginPage = new LoginPage(page);
  
    await loginPage.navigate();
    await loginPage.fillCredentials(domain, username, invalidPassword);
    await loginPage.clickRememberMe();
    await loginPage.clickLogin();
    await loginPage.clickOk();
    await expect(loginPage.loginHeading).toBeVisible();
  });
  
  test('TC-3 - Login with invalid username', async ({ page }) => {
    qase.id(10)
    const loginPage = new LoginPage(page);
  
    await loginPage.navigate();
    await loginPage.fillCredentials(domain, invalidUsername, password);
    await loginPage.clickRememberMe();
    await loginPage.clickLogin();
    await loginPage.clickOk();
    await expect(loginPage.loginHeading).toBeVisible();
  });
  
  test('TC-4 - Login with invalid username and password', async ({ page }) => {
    qase.id(11)
    const loginPage = new LoginPage(page);
  
    await loginPage.navigate();
    await loginPage.fillCredentials(domain, invalidUsername, invalidPassword);
    await loginPage.clickRememberMe();
    await loginPage.clickLogin();
    await loginPage.clickOk();
    await expect(loginPage.loginHeading).toBeVisible();
  });
  
  test('TC-5 - Verify home page elements after successful login', async ({ page }) => {
    qase.id(12)
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
  
    await loginPage.navigate();
    await loginPage.fillCredentials(domain, username, password);
    await loginPage.clickRememberMe();
    await loginPage.clickLogin();
    await loginPage.clickOk();
    await expect(dashboardPage.companyLogo).toBeVisible();
  });
  
  test('TC-6 - Verify success log out', async ({ page }) => {
    qase.id(13)
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
  
    await loginPage.login(domain, username, password, true);
    await expect(dashboardPage.companyLogo).toBeVisible();
    await dashboardPage.logout(false);
  });
  
});

