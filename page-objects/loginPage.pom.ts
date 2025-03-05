import { expect, Locator, Page } from '@playwright/test';
require('dotenv').config();

export class LoginPage {
    private page: Page;
    public readonly usernameInputLocator: Locator
    public readonly passwordInputLocator: Locator
    public readonly loginButtonLocator: Locator
    public readonly informationAboutMemerLocator: Locator

  
  constructor(page: Page) {
    this.page = page;
    this.usernameInputLocator = page.locator('#username');
    this.passwordInputLocator = page.locator('#password');
    this.loginButtonLocator = page.locator('#login_button');
    this.informationAboutMemerLocator = page.locator('.about');

  }

  async getCurrentUrl(){
    return await this.page.url();
  }

  async performLogin(){
    await this.usernameInputLocator.fill(process.env.TEST_USER_USERNAME!);
    await this.passwordInputLocator.fill(process.env.TEST_USER_PASSWORD!);
    await this.loginButtonLocator.hover();
    await this.loginButtonLocator.click();
    await expect(this.informationAboutMemerLocator).toBeVisible({timeout: 30000});
 } 
}
