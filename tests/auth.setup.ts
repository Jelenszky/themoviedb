import { test as setup, expect } from '../page-objects/fixtures';
import path from 'path';

const authFile = path.resolve(__dirname, '../user.json');

setup('Authenticate with test user', async ({ page, homePage, loginPage, }) => {
  // GIVEN the home page is opened  
  await homePage.goto();
  // THEN the TMDB header should be visible  
  await expect(homePage.tmdbHeaderLocator).toBeVisible();
  // AND the Login button in the Header should be visible  
  await expect(homePage.loginButtonLocator).toBeVisible();
  // Perform authentication steps.  
  await homePage.clickLoginButton();
  await loginPage.performLogin();
  await page.context().storageState({ path: authFile });
});