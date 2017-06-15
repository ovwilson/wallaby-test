import { browser, element, by } from 'protractor';
import { WallabyTestPage } from './app.po';

describe('wallaby-test App', () => {
  let page: WallabyTestPage;

  beforeEach(() => {
    page = new WallabyTestPage();
  });

  it('should display message saying app works', () => {
    let h1Tag = element(by.model(''))
    page.navigateTo();
    page.setParagraphText('app-root h1', 'app works!');
    expect(page.getParagraphText('app-root h1')).toEqual('app works!');
  });
});
