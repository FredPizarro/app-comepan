import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';
import { NavbarComponent } from 'src/app/componentes/navbar/navbar.component';
import { NavComponent } from 'src/app/componentes/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, FooterComponent, NavbarComponent,NavComponent ]
})
export class HomePageModule {}
