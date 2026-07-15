import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { EmployeePage } from '../../pages/EmployeePage';

const domain = process.env.DOMAIN!;
const username = process.env.USERNAMETEST!;
const password = process.env.PASSWORD!;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.login(domain, username, password, true);
  await expect(dashboardPage.companyLogo).toBeVisible();
});

function generateUniqueNames() {
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return {
    firstName: `Frista${suffix}`,
    lastName: `Joe${suffix}`
  };
}

test('TC-1 - Verify success create new employee with valid data', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  const employeePage = new EmployeePage(page);

  const { firstName, lastName } = generateUniqueNames();
  
  await dashboardPage.navigateToEmployeeList();
  await employeePage.clickAddEmployee();
  
  await employeePage.fillEmployeeDetails({
    identityType: '2',
    identificationNumber: '821023918',
    firstName,
    lastName,
    permitType: '2'
  });
  
  // The rest of the commented code remains commented/unused as in the original test.
});