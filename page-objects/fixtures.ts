import { test as base, expect} from '@playwright/test';
import { HomePage } from "../page-objects/homePage.pom";
import { SearchResultPage } from '../page-objects/searchResultPage.pom';
import { LoginPage } from '../page-objects/loginPage.pom';


// Extend the base test fixture with HomePage, LoginPage and SearchResultPage
export const test = base.extend<{
    homePage: HomePage,
    searchResultPage: SearchResultPage
    loginPage: LoginPage
  }>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    searchResultPage: async ({ page }, use) => {
        await use(new SearchResultPage(page));
    }
    ,
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
  });

export { expect };  