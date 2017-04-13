import { UmsAppPage } from './app.po';

describe('ums-app App', () => {
  let page: UmsAppPage;

  beforeEach(() => {
    page = new UmsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
