import { Component, OnInit } from '@angular/core';
import { ProductsPresenterService } from './products-presenter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsPresenterService ]
})
export class ProductsComponent implements OnInit {

  constructor(public presenter: ProductsPresenterService) { }

  ngOnInit() {
  }

}