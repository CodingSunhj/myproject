import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  protected stars:boolean[];
  //@Input()声明 表示需要由父模块儿传值
  @Input()
  public rating :number=0;
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
