import { Locator, Page } from '@playwright/test';

export interface EmployeeDetails {
  identityType: string;
  identificationNumber: string;
  firstName: string;
  lastName: string;
  permitType: string;
}

export class EmployeePage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly identityTypeSelect: Locator;
  readonly identificationNumberInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly permitTypeSelect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole('button', { name: ' Add Employee' });
    this.identityTypeSelect = page.locator('select[name="identityType"]');
    this.identificationNumberInput = page.locator('input[name="identificationNumber"]');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.permitTypeSelect = page.locator('select[name="permitType"]');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async fillEmployeeDetails(details: EmployeeDetails) {
    await this.identityTypeSelect.selectOption(details.identityType);
    await this.identificationNumberInput.click();
    await this.identificationNumberInput.fill(details.identificationNumber);
    await this.firstNameInput.click();
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.click();
    await this.lastNameInput.fill(details.lastName);
    await this.permitTypeSelect.selectOption(details.permitType);
  }
}
