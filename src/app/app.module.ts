import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BagComponent } from './bag/bag.component';
import { SlotComponent } from './slot/slot.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({

  declarations: [
    AppComponent,
    BagComponent,
    SlotComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
