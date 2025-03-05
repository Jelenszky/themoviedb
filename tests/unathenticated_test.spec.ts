import { test , expect} from '../page-objects/fixtures';

// Reset storage state for this file to avoid being authenticated
test.use({ storageState: { cookies: [], origins: [] } });

// Use defined fixtures in the test
test("Search for the movie 'Matrix' with unauthenticated user", async ({ homePage, searchResultPage}) => {
  // GIVEN the home page is opened
  await homePage.goto(); 

  // THEN the TMDB header should be visible
  await expect(homePage.tmdbHeaderLocator).toBeVisible();

  // AND the Login button in the Header should be visible
  await expect(homePage.loginButtonLocator).toBeVisible();

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

