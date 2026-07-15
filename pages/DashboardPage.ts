import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly companyLogo: Locator;
  readonly employeeMenu: Locator;
  readonly employeeListSubMenu: Locator;
  readonly userProfileMenu: Locator;
  readonly logoutButton: Locator;
  readonly logoutOkButton: Locator;
  readonly chooseAccountHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.companyLogo = page.locator('#companyLogoImage');
    this.employeeMenu = page.getByRole('link', { name: 'Employee' });
    this.employeeListSubMenu = page.getByRole('link', { name: 'Employee List' });
    this.userProfileMenu = page.locator('.flaticon-user').first();
    this.logoutButton = page.getByRole('button', { name: /Logout/i });
    this.logoutOkButton = page.getByRole('button', { name: 'OK' });
    this.chooseAccountHeading = page.getByRole('heading', { name: 'Choose an Account' });
  }

  async navigateToEmployeeList() {
    await this.employeeMenu.click();
    await this.employeeListSubMenu.click();
  }

  async clickUserProfile() {
    await this.userProfileMenu.click();
  }

  async clickLogout() {
    await this.logoutButton.click();
  }

  async clickLogoutOk() {
    await this.logoutOkButton.click();
  }

  async logout(confirm = false) {
    await this.clickUserProfile();
    await this.clickLogout();
    if (confirm) {
      await this.clickLogoutOk();
    }
  }
}
