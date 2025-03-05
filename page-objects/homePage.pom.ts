import { Locator, Page } from '@playwright/test';

export class HomePage {
    private page: Page;
    public readonly tmdbHeaderLocator: Locator
    public readonly loginButtonLocator: Locator
    public readonly searchBarLocator: Locator
    public readonly searchButtonLocator: Locator
  
  constructor(page: Page) {
    this.page = page;
    this.tmdbHeaderLocator = page.locator('a.logo  img[alt="The Movie Database (TMDB)"]');
    this.loginButtonLocator = page.locator('a[aria-label="Login"]');
    this.searchBarLocator = page.locator('#inner_search_v4');
    this.searchButtonLocator = page.locator('input[value="Search"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async typeTextIntoSearchbar(text: string){
    await this.searchBarLocator.fill(text);
  }

  async clickSearchButton(){
    await this.searchButtonLocator.click();
}
 
async clickLoginButton(){
    await this.loginButtonLocator.click();
    await this.page.waitForURL(/.*login/);
}

}  