import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  constructor(private productService: ProductService) { }
  //钩子函数，组件初始化时只执行一次，用于初始化数据
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}

