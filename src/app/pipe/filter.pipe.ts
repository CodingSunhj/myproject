import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string,keyword: string): any {
    if(!filterFiled || !keyword){
      return list;
    }
    return list.filter(
      item=>{ // item为list中的对象
        let filedvalue = item[filterFiled];
        return filedvalue.indexOf(keyword) >= 0;
      }
    )
  }

}
