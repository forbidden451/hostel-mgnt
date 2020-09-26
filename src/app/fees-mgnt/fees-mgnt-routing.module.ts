import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesMgntPage } from './fees-mgnt.page';

const routes: Routes = [
  {
    path: '',
    component: FeesMgntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesMgntPageRoutingModule {}
