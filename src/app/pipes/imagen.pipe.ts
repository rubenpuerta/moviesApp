import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: string): string {
    let urlImage = `https://image.tmdb.org/t/p/w500${value}`;
    if (!value) {
      urlImage = 'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
    }
    return urlImage;
  }

}
