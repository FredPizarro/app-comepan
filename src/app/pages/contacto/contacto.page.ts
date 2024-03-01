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
}
