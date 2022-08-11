import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter',
})
export class ImageFilterPipe implements PipeTransform {
  transform(value: any, filterText?: any): any {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText
      ? value.filter(
          (p: any) => p.title.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
