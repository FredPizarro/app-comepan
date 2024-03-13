import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  // Propiedad para manejar el estado de la sidebar
  sidebarMinimized = false;

  constructor() { }

  // Método para alternar la barra lateral
  toggleSidebar() {
    this.sidebarMinimized = !this.sidebarMinimized;
  }
}
