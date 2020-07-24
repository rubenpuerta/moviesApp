import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generos'
})
export class GenerosPipe implements PipeTransform {

  transform(genres_id: any[], allGenres: any, unaPelicula?:boolean): string[] {
    let arrGeneros = [];

    if (!unaPelicula) {
      for (let genre of genres_id) {
        for (let k in allGenres) {
          if ( allGenres[k]['id'] === genre ) {
            arrGeneros.push(allGenres[k]['name']);
          }
        }
      }
    }
    else {
      for (const i in genres_id) {
        for (const k in allGenres) {
          if ( allGenres[k]['id'] === genres_id[i]['id'] ) {
            arrGeneros.push(allGenres[k]['name']);
          }
        }
      }
    }
    return arrGeneros;
  }

}
