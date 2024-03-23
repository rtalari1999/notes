import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product',
  standalone: true
})
export class ProductPipe implements PipeTransform {

  transform(value: any, brand:string): any {
    console.log('__Pipe is working', value, brand)
    var productList = value;
    var product = productList.filter((res:any) =>{
      var hasValue = Object.values(res).includes(brand)
      return hasValue;
    })
    return product;
  }

}
