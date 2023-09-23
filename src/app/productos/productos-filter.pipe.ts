import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productosFilter'
})
export class ProductosFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
