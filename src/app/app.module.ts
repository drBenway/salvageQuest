import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularDraggableModule } from 'angular2-draggable';

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
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
