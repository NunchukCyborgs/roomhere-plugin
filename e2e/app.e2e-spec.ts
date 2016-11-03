import { RoomherePluginPage } from './app.po';

describe('roomhere-plugin App', function() {
  let page: RoomherePluginPage;

  beforeEach(() => {
    page = new RoomherePluginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
