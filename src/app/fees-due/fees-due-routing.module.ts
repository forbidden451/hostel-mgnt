import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeesDuePage } from './fees-due.page';

const routes: Routes = [
  {
    path: '',
    component: FeesDuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesDuePageRoutingModule {}
