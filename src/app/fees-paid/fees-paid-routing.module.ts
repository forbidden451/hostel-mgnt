import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesPaidPage } from './fees-paid.page';

const routes: Routes = [
  {
    path: '',
    component: FeesPaidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesPaidPageRoutingModule {}
