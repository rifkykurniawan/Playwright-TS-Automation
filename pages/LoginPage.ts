import { Locator, Page, test } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly domainInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly okButton: Locator;
  readonly closeButton: Locator;
  readonly loginHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.domainInput = page.getByRole('textbox', { name: 'Domain' });
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.rememberMeCheckbox = page.locator('.m-checkbox > span');
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.okButton = page.getByRole('button', { name: 'OK' });
    this.closeButton = page.getByRole('button', { name: 'Close' });
    this.loginHeading = page.getByRole('heading', { name: 'Log in to your account' });
  }

  async screenshot(name: string) {
    await test.info().attach(name, {
      body: await this.page.screenshot({
        fullPage: true,
      }),
      contentType: 'image/png',
    });
  }

  async navigate() {
    await this.page.goto('https://v2.hrmlabs.com');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async fillCredentials(domain: string, username: string, password?: string) {
    if (domain !== undefined) {
      await this.domainInput.click();
      await this.domainInput.fill(domain);
    }
    if (username !== undefined) {
      await this.usernameInput.click();
      await this.usernameInput.fill(username);
    }
    if (password !== undefined) {
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
    }
  }

  async fillCredentialsWithoutClick(domain: string, username: string, password?: string) {
    if (domain !== undefined) await this.domainInput.fill(domain);
    if (username !== undefined) await this.usernameInput.fill(username);
    if (password !== undefined) await this.passwordInput.fill(password);
  }

  async clickRememberMe() {
    await this.rememberMeCheckbox.click();
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.screenshot('clickLogin.png');
  }

  async clickOk() {
    await this.okButton.click();
  }

  async clickClose() {
    await this.closeButton.click();
  }

  async login(domain: string, username: string, password?: string, rememberMe = true) {
    await this.navigate();
    await this.fillCredentialsWithoutClick(domain, username, password);
    if (rememberMe) {
      await this.clickRememberMe();
    }
    await this.clickLogin();
    await this.clickOk();
    if (rememberMe) {
      await this.clickRememberMe();
    }
    await this.clickClose();
  }
}