import { Component, EventEmitter, Input, OnInit, Output, booleanAttribute } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @Input({ transform: booleanAttribute }) mostrar!: boolean;
  @Output() mostrar_o = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  ngOnInit() { }

  cerrarSesion() {

  }

  cerrar() {
    this.mostrar = !this.mostrar;
    this.mostrar_o.emit(this.mostrar);
    console.log(this.mostrar);
  }

  navRegister() {
    this.cerrar();
    this.route.navigateByUrl('/acceso');
  }

}

