import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Observable<Product[]>;
  // public keyword:string;
  // public titleFilter:FormControl = new FormControl();
  constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges
    //   .subscribe(
    //   value => this.keyword = value
    // );
  }
  //钩子函数，组件初始化时只执行一次，用于初始化数据
  ngOnInit() {
    this.products = this.productService.getProducts();
    this.productService.searchEvent.subscribe(
        params => this.products = this.productService.search(params)
    );
  }

}

