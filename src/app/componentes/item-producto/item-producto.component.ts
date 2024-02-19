import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.scss'],
})
export class ItemProductoComponent  implements OnInit {
  cantidad: number = 1;

  onKeyDown(event: KeyboardEvent) {
    // Obtenemos el código de la tecla presionada
    const keyCode = event.keyCode;
  
    // Permitimos las teclas de navegación y borrar
    if ((keyCode >= 35 && keyCode <= 40) || keyCode === 8 || keyCode === 46) {
      return true;
    }
  
    // Permitimos solo números del 0 al 9
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
      return true;
    }
  
    // Bloqueamos el resto de teclas
    return false;
  }
  
  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(inputValue);
    
    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 99) {
      this.cantidad = parsedValue;
    } else {
      // Si la entrada no es un número válido o está fuera del rango, se restablece a 1
      this.cantidad = 1;
    }
  }

  incrementarCantidad() {
    if (this.cantidad < 99) {
      this.cantidad++;
    }
  }

  decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    } else {
      // Si la cantidad es 1 y se intenta decrementar más, se mantiene en 1
      this.cantidad = 1;
    }
  }
  
  constructor() {
    
   }

  ngOnInit() {}
  
}
