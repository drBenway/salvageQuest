import { AppPage } from './app.po';

describe('bag', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have a bag element', () => {

    expect(page.getBag().isPresent()).toEqual(true);
  });
  it('should have a bag with 16 slots', function () {

    expect(page.countSlotsInBag()).toEqual(16);
  });
  it('should have a bag with a title', function () {
    expect(page.getBagTitle()).toEqual('title');
  });
  it('should have a bag with a close button', function () {
    expect(page.getBagCloseButton()).toBeDefined();
  });

});
