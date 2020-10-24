import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'arrayLength'
})
export class ArrayLengthPipe implements PipeTransform {

  transform(array: string[], length: number = 5): string[] {
    return array.filter((elem: string) => elem.length >= length);
  }

}
