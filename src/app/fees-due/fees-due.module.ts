import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeesDuePageRoutingModule } from './fees-due-routing.module';

import { FeesDuePage } from './fees-due.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeesDuePageRoutingModule
  ],
  declarations: [FeesDuePage]
})
export class FeesDuePageModule {}
