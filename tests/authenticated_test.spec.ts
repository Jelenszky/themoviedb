import { test , expect} from '../page-objects/fixtures';

// Use defined fixtures in the test
test("Search for the movie 'Matrix' with authenticated user", async ({ homePage, searchResultPage}) => {
    // GIVEN the home page is opened
    await homePage.goto();   
  
    //WHEN the "Matrix" search term is typed into the Search Bar
    await homePage.typeTextIntoSearchbar("Matrix");
  
    //AMD the Search button is clicked
    await homePage.clickSearchButton();
  
    //THEN the Search result page should be loaded
    expect(await searchResultPage.getCurrentUrl()).toContain("/search?");
    expect(await searchResultPage.isSearchResultsSectionVisible()).toBe(true);
  
    //AND the title of the first search result should be "Matrix"  
    expect((await searchResultPage.getSearchResultTexts())[0]).toBe("Matrix");
  
  });
  