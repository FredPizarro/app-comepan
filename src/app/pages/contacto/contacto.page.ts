import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})

export class ContactoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showError: boolean = false;
  interacted: boolean = false;
 
 
  onBlur(event: any): void {
    this.interacted = true;
    if (event.target.value.trim() === '') {
      this.showError = true;
    }
  }

  onFocus(): void {
    this.showError = false;
  }
  //SELECTMENUUU//
  menuOpen: boolean = false;
  selectedOption: string | null = null;
  options = [
    { text: 'Tesito', iconClass: 'fas fa-mug-saucer', color: '#FFD43B' },
    { text: 'Tarta', iconClass: 'fas fa-cake-candles  ', color: '#D2B48C' },
    { text: 'Pan de Centeno', iconClass: 'fas fa-bread-slice', color: '#9A7D4E' },
    { text: 'Pan Integral', iconClass: 'fas fa-bread-slice', color: '#CD853F' },
    { text: 'Pan de Avena', iconClass: 'fas fa-seedling', color: '#D2B48C' }
];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  selectOption(option: any) {
    this.selectedOption = option.text;
    this.menuOpen = false;
   
  }
  //SELETCMENUUU//
  //TABLA//
  datos = [
    { id: 1, nombre: 'Elemento 1', apellido: 'Apellido 1', edad: 25, email: 'elemento1@example.com' },
    { id: 2, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 3, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 4, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 5, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 6, nombre: 'Elemento 1', apellido: 'Apellido 1', edad: 25, email: 'elemento1@example.com' },
    { id: 7, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 8, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 9, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 10, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 11, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 12, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 13, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 14, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 15, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 11, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 12, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 13, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 14, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 15, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 11, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 12, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 13, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 14, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 11, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 12, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 13, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 14, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 10, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    { id: 11, nombre: 'Elemento 2', apellido: 'Apellido 2', edad: 30, email: 'elemento2@example.com' },
    { id: 12, nombre: 'Elemento 3', apellido: 'Apellido 3', edad: 35, email: 'elemento3@example.com' },
    { id: 13, nombre: 'Elemento 4', apellido: 'Apellido 4', edad: 40, email: 'elemento4@example.com' },
    { id: 14, nombre: 'Elemento 5', apellido: 'Apellido 5', edad: 45, email: 'elemento5@example.com' },
    
    
    // Añade más datos según sea necesario
  ];

  
  itemsPorPagina = 5;
  paginaActual = 1;
  mostrarTodos = false;
  rangoPaginasMostradas = 3;
  verTodos: boolean = false;

  cambiarPagina(pagina: number) {
    this.paginaActual = pagina;
  }

  obtenerDatosPagina(): any[] {
    if (this.mostrarTodos) {
      return this.datos;
    } else {
      const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
      const fin = inicio + this.itemsPorPagina;
      return this.datos.slice(inicio, fin);
    }
  }

  calcularTotalPaginas(): number {
    return Math.ceil(this.datos.length / this.itemsPorPagina);
  }

  get botonesDeshabilitados(): { anterior: boolean, siguiente: boolean, numeros: boolean } {
    const totalPaginas = this.calcularTotalPaginas();
    return {
      anterior: this.paginaActual === 1 || this.verTodos || this.mostrarTodos,
      siguiente: this.paginaActual === totalPaginas || this.verTodos || this.mostrarTodos,
      numeros: this.verTodos || this.mostrarTodos // Deshabilitar los números de página cuando verTodos o mostrarTodos estén activados
    };
}

  get paginas(): number[] {
    const cantidadTotalPaginas = Math.ceil(this.datos.length / this.itemsPorPagina);
    let paginaInicial = Math.max(1, this.paginaActual - Math.floor(this.rangoPaginasMostradas / 2));
    const paginaFinal = Math.min(cantidadTotalPaginas, paginaInicial + this.rangoPaginasMostradas - 1);
  
    // Ajustar el inicio si la cantidad total de páginas es menor que el rango de páginas mostradas
    if (cantidadTotalPaginas <= this.rangoPaginasMostradas) {
      paginaInicial = 1;
    } else if (paginaFinal === cantidadTotalPaginas) {
      paginaInicial = Math.max(1, paginaFinal - this.rangoPaginasMostradas + 1);
    }
  
    return Array.from({ length: paginaFinal - paginaInicial + 1 }, (_, index) => paginaInicial + index);
  }

  verTodo() {
    this.mostrarTodos = !this.mostrarTodos; // Alternar entre mostrar todos y mostrar solo una página
    this.paginaActual = 1; // Establecer la página actual en 1 al presionar Ver Todo
    this.rangoPaginasMostradas = this.mostrarTodos ? 1 : 3; // Mostrar solo una página después de presionar Ver Todo
}
 //TABLA///
  
}
