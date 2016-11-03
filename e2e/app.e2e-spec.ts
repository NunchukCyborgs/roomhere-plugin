import { RoomhereEmbedPage } from './app.po';

describe('roomhere-embed App', function() {
  let page: RoomhereEmbedPage;

  beforeEach(() => {
    page = new RoomhereEmbedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
