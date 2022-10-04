import { Component, Input, OnInit } from '@angular/core';
import { product1 } from '../../../core/imges';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input()
  products: ProductModel[];
  img = product1
  constructor() {}

  ngOnInit() {}
}
