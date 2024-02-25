import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoPageRoutingModule } from './acceso-routing.module';

import { AccesoPage } from './acceso.page';
import { RegisterComponent } from 'src/app/componentes/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoPageRoutingModule
  ],
  declarations: [AccesoPage, RegisterComponent]
})
export class AccesoPageModule { }
