import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.page.html',
  styleUrls: ['./acceso.page.scss'],
})
export class AccesoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() { }

  cerrarSesion() {

  }

  cerrar() {

  }

  navRegister() {
    this.route.navigateByUrl('/acceso');
  }


}
