import {EventEmitter, Injectable} from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import { URLSearchParams } from '@angular/http';
@Injectable()
export class ProductService {
  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  constructor(private http:Http) { }
  getProducts(): Observable<Product[]>{
    return this.http.get("/api/product").map(res => res.json());
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get("/api/product/"+id).map(res => res.json());
  }
  getCommentsForProductId(id: number): Observable<Comment[]>{
    return this.http.get("/api/product/"+id+"/comments").map(res =>res.json());
  }

  getAllcategories(): string[]{
    return ["电子产品","硬件设备","图书"]
  }
  search(params: ProductSearchParams): Observable<Product[]> {
    let sum = this.encodeParams(params);
    return this.http.get("/api/product",{ search: sum}).map( res=> res.json());
  }

  private encodeParams(params: ProductSearchParams) {
   return Object.keys(params)
      .filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string)=>{
        sum.append(key,params[key]);
        return sum;
      },new URLSearchParams());
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
export class ProductSearchParams {
  constructor(public title: string,
              public price: number,
              public category: string){
  }
}
