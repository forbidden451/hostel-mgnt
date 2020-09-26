import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'fees-mgnt',
    loadChildren: () => import('./fees-mgnt/fees-mgnt.module').then( m => m.FeesMgntPageModule)
  },
  {
    path: 'fees-due',
    loadChildren: () => import('./fees-due/fees-due.module').then( m => m.FeesDuePageModule)
  },
  {
    path: 'fees-paid',
    loadChildren: () => import('./fees-paid/fees-paid.module').then( m => m.FeesPaidPageModule)
  },
  {
    path: 'pay-fees',
    loadChildren: () => import('./pay-fees/pay-fees.module').then( m => m.PayFeesPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
