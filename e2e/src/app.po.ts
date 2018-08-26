import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  getBag(){
      return element(by.id('bag1'));
  }

  getBagTitle(){
    return element(by.css('.bag .bag_title')).getText();
  }
  getBagCloseButton(){
    return element(by.css('#bag1 .bag_close_btn'));
  }
  clickBagCloseButton(){
    let btn = this.getBagCloseButton();
    btn.click();
  }
  countSlotsInBag(){
    let slots = $$('.slot');
    return slots.count();
  }
}
