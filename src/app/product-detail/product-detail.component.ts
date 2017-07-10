import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Comment, Product, ProductService} from "../shared/product.service";
import {Observable} from "rxjs/Observable";
import {WebSocketService} from "../shared/web_socket.service";
import {Subscription} from "rxjs/Subscription";

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
  isWatched: boolean = false;
  currentBid: number;
  isCommentHidden = true;
  subscriptuion: Subscription;
  constructor(private routeInfo: ActivatedRoute,private productService: ProductService,private wsService: WebSocketService) {

  }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params["productId"];
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product;
        this.currentBid = product.price;
      }
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
  watchProduct(){
    this.isWatched = !this.isWatched;
    if(this.isWatched) {
      this.subscriptuion = this.wsService.createObservableSocket("ws://localhost:8085", this.product.id)
        .subscribe(
          products => {
            let product = products.find(p => p.productId === this.product.id);
            this.currentBid = product.bid;
          }
        );
    }else{
      if(this.subscriptuion){
        this.subscriptuion.unsubscribe();
        this.subscriptuion = null;
      }
    }
  }

}
