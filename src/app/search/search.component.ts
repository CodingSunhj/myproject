import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModule: FormGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    let fb = new FormBuilder();
    this.formModule = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null,this.postiveNumberValidator],
      category: ['-1']
    })
  }

  ngOnInit() {
    this.categories = this.productService.getAllcategories();
  }
  postiveNumberValidator(control: FormControl): any {
    if(!control.value) {
      return null;
    }
    let price = parseInt(control.value);
    if(price>0) {
      return null;
    }else{
      return {positiveNumber: true};
    }
  }

  onSearch(){
    let value: any = this.formModule.get('title').errors;
    // console.log('校验结果'+JSON.stringify(value));
    if(this.formModule.valid){
      this.productService.searchEvent.emit(this.formModule.value);
    }
  }

}
