import { Locator, Page } from '@playwright/test';

export class SearchResultPage {
    private page: Page;
    public readonly searchResultsSectionLocator: Locator
    public readonly searchResultItemsLocator: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.searchResultsSectionLocator = page.locator('section.main_content.search_results');
    this.searchResultItemsLocator = page.locator('section.panel div.title a.result');
  }

  async getCurrentUrl(){
    return await this.page.url();
  }

  async isSearchResultsSectionVisible(){
    try {
      await this.searchResultsSectionLocator.waitFor({ state: 'visible' });
      return true;
    } catch {
      return false;
    }
}

async getSearchResultTexts(): Promise<string[]> {
  const elements = await this.searchResultItemsLocator.elementHandles();
  const results = await Promise.all(elements.map(async (element) => {
      const text = await element.textContent();
      return text || '';
  }));

  return results;
}

}