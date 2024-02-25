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

  constructor() { }

  ngOnInit() { }


}
