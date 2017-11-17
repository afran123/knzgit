import { AfsaprojPage } from './app.po';

describe('afsaproj App', () => {
  let page: AfsaprojPage;

  beforeEach(() => {
    page = new AfsaprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
