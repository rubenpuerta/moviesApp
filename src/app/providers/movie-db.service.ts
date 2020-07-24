import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// HttpClientJsonpModule
/*
  Hay servicios que están abiertos para que todo el mundo
  los pueda consumir, hay otros que no... el JSONP sirve para
  hacer GETs sin habilitar CORS pero es más limitado su acceso,
  el JSONP lo que hace es leer la data como si fuera texto y
  transformar la respuesta en un json (más o menos así).
*/

@Injectable({
  providedIn: 'root',
})
export class MovieDbService {
  generos: any;
  filmPages: number;

  constructor(private _http: HttpClient) {
    console.log('Sevicio Listo');
    this.getGenre().subscribe((data) => (this.generos = data));
  }

  getQuery(path: string, option: string = '') {
    const urlDB = 'https://api.themoviedb.org/3/';
    const apiKey = '';

    let url = `${urlDB}${path}?api_key=${apiKey}&language=es-ES${option}`;
    return this._http.jsonp(url, 'callback');
  }

  getFilm(filmID: string) {
    return this.getQuery(`movie/${filmID}`).pipe(map((data) => data));
  }

  getFilms(pagina: string = '') {
    if (pagina) {
      pagina = `&page=${pagina}`;
    }
    return this.getQuery('movie/now_playing', pagina).pipe(
      map((data) => {
        this.filmPages = data['total_pages'];
        return data['results'];
      })
    );
  }

  getGenre() {
    return this.getQuery('genre/movie/list').pipe(
      map((data) => data['genres'])
    );
  }

  searchFilms(texto: string, pagina: string = '') {
    if (pagina) {
      pagina = `&page=${pagina}`;
    }
    return this.getQuery(`search/movie`, `&query=${texto}${pagina}`).pipe(
      map((data) => {
        this.filmPages = data['total_pages'];
        return data['results'];
      })
    );
  }
}
