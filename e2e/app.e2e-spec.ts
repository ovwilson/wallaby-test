import { WallabyTestPage } from './app.po';

describe('wallaby-test App', () => {
  let page: WallabyTestPage;

  beforeEach(() => {
    page = new WallabyTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
