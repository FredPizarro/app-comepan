import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.page.html',
  styleUrls: ['./list-producto.page.scss'],
})
export class ListProductoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onProduct(){
    
    this.route.navigateByUrl('/producto');
  }
  

}
