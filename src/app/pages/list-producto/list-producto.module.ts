import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductoPageRoutingModule } from './list-producto-routing.module';

import { ListProductoPage } from './list-producto.page';
import { ItemProductoComponent } from 'src/app/componentes/item-producto/item-producto.component';
import { FooterComponent } from 'src/app/componentes/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductoPageRoutingModule
  ],
  declarations: [ListProductoPage, ItemProductoComponent, FooterComponent],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]

})
export class ListProductoPageModule { }
