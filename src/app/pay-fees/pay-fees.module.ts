import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayFeesPageRoutingModule } from './pay-fees-routing.module';

import { PayFeesPage } from './pay-fees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayFeesPageRoutingModule
  ],
  declarations: [PayFeesPage]
})
export class PayFeesPageModule {}
