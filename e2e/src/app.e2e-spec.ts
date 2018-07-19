import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should display title of the post when button is clicked', () => {
    page.navigateTo();
    page.clickButton();
    expect(page.getPostTitle()).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });
});
