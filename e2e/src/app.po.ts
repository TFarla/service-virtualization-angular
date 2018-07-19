import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  clickButton() {
    return element(by.css('app-root button')).click();
  }

  getPostTitle() {
    return element(by.css('app-root #title')).getText();
  }
}
