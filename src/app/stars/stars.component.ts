import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {


  protected stars:boolean[];
  @Input()
  private readonly : boolean = true;
  //@Input()声明 表示需要由父模块儿传值
  @Input()
  public rating :number=0;
  @Output()
  private ratingNew: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  clickStar(index: number){
    if(!this.readonly) {
      this.rating = index + 1;
      this.ratingNew.emit(this.rating);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }

}
