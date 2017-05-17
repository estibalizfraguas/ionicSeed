import { QuierovermistestPage } from './app.po';

describe('quierovermistest App', () => {
  let page: QuierovermistestPage;

  beforeEach(() => {
    page = new QuierovermistestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});