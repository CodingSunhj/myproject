import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected products:Array<Product>;
  constructor() { }
  //钩子函数，组件初始化时只执行一次，用于初始化数据
  ngOnInit() {
      this.products = [
        new Product(1,"第一个商品",2.99,3.5,"这是第一个商品，用于Angular测试是数据",["电子产品","硬件设备"]),
        new Product(2,"第二个商品",1.59,1.5,"这是第二个商品，用于Angular测试是数据",["图书","硬件设备"]),
        new Product(3,"第三个商品",359,4.5,"这是第三个商品，用于Angular测试是数据",["图书"]),
        new Product(4,"第四个商品",1.45,3.5,"这是第四个商品，用于Angular测试是数据",["电子产品","硬件设备"]),
        new Product(5,"第五个商品",6.24,2.5,"这是第五个商品，  用于Angular测试是数据",["硬件设备"]),
        new Product(6,"第六个商品",2.32,3.5,"这是第六个商品，用于Angular测试是数据",["电子产品","硬件设备"]),
        new Product(7,"第七个商品",4.354,3,"这是第七个商品，用于Angular测试是数据",["电子产品"]),
        new Product(8,"第八个商品",58.45,4,"这是第八个商品，用于Angular测试是数据",["图书"]),
        new Product(9,"第九个商品",35.45,3.5,"这是第九个商品，用于Angular测试是数据",["电子产品"]),
        new Product(10,"第十个商品",8.54,1,"这是第十个商品，用于Angular测试是数据",["电子产品","硬件设备"]),

      ]
  }

}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categoried:Array<string>
  ){

  }
}
