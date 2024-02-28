import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  mostrarLogin: boolean = false;

  toggleLoginPanel() {
    this.mostrarLogin = !this.mostrarLogin;
  }
  // Método para cerrar sesión
  cerrarSesion() {
    // Aquí puedes realizar las acciones necesarias para cerrar la sesión del usuario,
    // como limpiar el estado de autenticación, redirigir a la página de inicio, etc.
    // Por ejemplo:
    // Limpiar datos de sesión o token de autenticación
    // Redirigir a la página de inicio
    this.mostrarLogin = false; // Ocultar el panel de inicio de sesión después de cerrar sesión
  }
   
   //Car//
    // Variable para controlar la visibilidad del panel del carrito
    
    showCartPanel: boolean = false;
  
   
  
    openCartPanel() {
      this.showCartPanel = !this.showCartPanel;
      console.log('Panel del carrito abierto');
    }
    
    
   //sdds//
   cantidad: number = 0; // Inicializamos la cantidad a 2

   decrementarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }
  
  incrementarCantidad() {
    if (this.cantidad < 99) {
      this.cantidad++;
    }
  }
   validarCantidad() {
    // Convertir cantidad a cadena de texto
    let cantidadString = this.cantidad.toString();
  
    // Aplicar expresión regular para permitir solo números
    cantidadString = cantidadString.replace(/[^0-9]/g, '');
  
    // Limitar la longitud a dos dígitos
    cantidadString = cantidadString.slice(0, 2);
  
    // Convertir a número si es válido
    const validatedValue = parseInt(cantidadString, 10);
  
    // Asignar el valor validado
    this.cantidad = isNaN(validatedValue) ? 1 : validatedValue;
    
  }
  validarEntrada(event: KeyboardEvent) {
    // Permitir solo números y teclas de control (por ejemplo, borrar)
    if (!((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || [8, 9, 37, 39].includes(event.keyCode))) {
      event.preventDefault();
    }
  
    // Limitar la longitud a dos dígitos
    if ((event.target as HTMLInputElement).value.length >= 2 && ![8, 37, 39].includes(event.keyCode)) {
      event.preventDefault();
    }
  }
  constructor() { }

  ngOnInit() { }

  onMostrarEvento(mensaje: boolean) {
    this.mostrarLogin = mensaje;
  }


}