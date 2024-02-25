import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesoPage } from './acceso.page';

const routes: Routes = [
  {
    path: '',
    component: AccesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesoPageRoutingModule {}
