import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  comments: Comment[];
  newRating:number = 5;
  newComment:string="";

  isCommentHidden = true;
  constructor(private routeInfo: ActivatedRoute,private productService: ProductService) {

  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"];
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
    );
     this.productService.getCommentsForProductId(productId).subscribe(
       comments => this.comments = comments
     );
  }

  addComment(){
    let comment: Comment = new Comment(0,this.product.id,new Date().toISOString(),'someone', this.newRating,this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum,comment)=> sum+comment.rating,0);
    this.product.rating = sum/ this.comments.length;
    this.newComment = "";
    this.newRating = 5;

  }
  ratingHandler(event:number){
    this.newRating = event;
  }

}
