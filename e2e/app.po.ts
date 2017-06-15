import { browser, element, by } from 'protractor';

export class WallabyTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(css: string) {
    return element(by.css(css)).getText();
  }

  setParagraphText(css: string, value: string) {
    element(by.css(css)).sendKeys(value);
  }
}
