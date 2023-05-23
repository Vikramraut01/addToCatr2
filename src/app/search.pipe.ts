import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, searctxt: any) {
    if (!searctxt) {
      return value;
    }
    searctxt = searctxt.toLowerCase();
    return value.filter((data: any) => {
      return JSON.stringify(data).toLowerCase().includes(searctxt);
    });
  }
}
