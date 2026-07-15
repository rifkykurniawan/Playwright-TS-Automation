import { Locator, Page } from '@playwright/test';

export interface EmployeeDetails {
  identityType: string;
  identificationNumber: string;
  firstName: string;
  lastName: string;
  permitType: string;
  // birthDate: string;
  // nationality: string;
  // martialStatus: string;
  // donation: string;
  // extraDonation: string;
  // nextOfKin: string;
  // race: string;
  // religion: string;
  // email: string;
}

export class EmployeePage {
  readonly page: Page;
  readonly addEmployeeButton: Locator;
  readonly identityTypeSelect: Locator;
  readonly identificationNumberInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly permitTypeSelect: Locator;
  // readonly birthDate: Locator;
  // readonly nationality: Locator;
  // readonly martialStatus: Locator;
  // readonly donation:Locator;
  // readonly extraDonation: Locator;
  // readonly nextOfKin: Locator;
  // readonly race: Locator;
  // readonly religion: Locator;
  // readonly email: Locator;
  readonly continueButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeButton = page.getByRole('button', { name: ' Add Employee' });
    this.identityTypeSelect = page.locator('select[name="identityType"]');
    this.identificationNumberInput = page.locator('input[name="identificationNumber"]');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.permitTypeSelect = page.locator('select[name="permitType"]');    
    // this.nationality = page.locator('select[name="nationality"]');
    // this.martialStatus = page.locator('select[name="martialStatus"]');
    // this.donation = page.locator('select[name="donation"]');
    // this.extraDonation = page.locator('select[name="extraDonation"]');
    // this.nextOfKin = page.locator('input[name="nextOfKin"]');
    // this.race = page.locator('select[name="race"]');
    // this.religion = page.locator('select[name="religion"]');
    this.continueButton = page.locator('xpath=//*[@id="m_form"]/footer/div/div/div[2]/button[2]');
    

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
    // await this.birthDate.fill(details.birthDate);
    // await this.nationality.selectOption(details.nationality);
    // await this.martialStatus.selectOption(details.martialStatus);
    // await this.donation.selectOption(details.donation);
    // await this.extraDonation.selectOption(details.extraDonation);
    // await this.nextOfKin.click();
    // await this.nextOfKin.fill(details.nextOfKin);
    // await this.race.selectOption(details.race);
    // await this.religion.selectOption(details.religion);
    // await this.email.click();
    // await this.email.fill(details.email);
    
  }
  
  async clickContinueButton(){
    await this.continueButton.click();
  }
}
