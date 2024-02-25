import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.scss', './register.component.scss'],
})
export class RegisterComponent implements OnInit {

  mostrar_registro: boolean = true;

  constructor(private route: Router) { }

  ngOnInit() { }

  cerrarSesion() {

  }

  cerrar() {
    this.route.navigateByUrl('/');
  }

  navRegister() {
    this.mostrar_registro = !this.mostrar_registro;
  }


}
