import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesMgntPageRoutingModule } from './fees-mgnt-routing.module';

import { FeesMgntPage } from './fees-mgnt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesMgntPageRoutingModule
  ],
  declarations: [FeesMgntPage]
})
export class FeesMgntPageModule {}
