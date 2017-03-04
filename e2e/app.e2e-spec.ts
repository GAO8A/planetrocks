import { PlanetrocksPage } from './app.po';

describe('planetrocks App', () => {
  let page: PlanetrocksPage;

  beforeEach(() => {
    page = new PlanetrocksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
