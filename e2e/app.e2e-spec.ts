import { StfNgSelectPage } from './app.po';

describe('stf-ng-select App', () => {
  let page: StfNgSelectPage;

  beforeEach(() => {
    page = new StfNgSelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
