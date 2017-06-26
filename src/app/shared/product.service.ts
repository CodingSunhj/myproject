import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
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
];
  private comments: Comment[] = [
    new Comment(1, 1, "2017-02-35", "张三", 3.0, "东西不错"),
    new Comment(2, 1, "2017-06-35", "张三", 5.0, "东西不错"),
    new Comment(3, 1, "2017-04-35", "张三", 4.0, "东西不错"),
    new Comment(4, 2, "2017-05-35", "张三", 2.0, "东西low"),
  ];
  constructor() { }
  getProducts(): Product[]{
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id ==id );
  }
  getCommentsForProductId(id: number): Comment[]{
    return this.comments.filter((comment: Comment) => comment.productId == id);
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
export class Comment{
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public comment: string
  ){

  }
}
