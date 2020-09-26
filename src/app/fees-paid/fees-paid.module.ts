import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesPaidPageRoutingModule } from './fees-paid-routing.module';

import { FeesPaidPage } from './fees-paid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesPaidPageRoutingModule
  ],
  declarations: [FeesPaidPage]
})
export class FeesPaidPageModule {}
