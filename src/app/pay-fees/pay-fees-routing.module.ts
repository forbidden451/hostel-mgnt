import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayFeesPage } from './pay-fees.page';

const routes: Routes = [
  {
    path: '',
    component: PayFeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayFeesPageRoutingModule {}
