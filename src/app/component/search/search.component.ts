import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../providers/movie-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  peliculas:any[];
  loading: boolean;
  texto:string;
  paginaActual: number;

  constructor(
    public _mDB: MovieDbService,
    private _route: ActivatedRoute
  ) {
    this.paginaActual = 1;

    this._route.params.subscribe (
      params => {
        console.log(params);
        
        if ( params['pagina'] ){
          if (params['pagina'] > 1) {
            this.paginaActual = params['pagina'];
          }
        }
        if ( params['busqueda']) {
          this.texto = params['busqueda'];
          this.buscar( this.texto, this.paginaActual );
        }
      }
    );
  }

  ngOnInit() {
  }

  buscar( texto:string, paginaActual?:any ){
    if ( texto.length > 0 ) {
      this.loading = true;
      this._mDB.searchFilms( texto, paginaActual ).subscribe(
          busqueda => {
            this.peliculas = [];
            if ( busqueda.length > 0 ) {
              this.peliculas = busqueda;
              if ( paginaActual ) {
                this.paginaActual = parseInt(paginaActual);
              }
            } else {
              this.peliculas = null;
            }
            this.loading = false;
          },
          error => {
            console.log(error);
            this.loading = false;
          }
      );
    } else {
      this.peliculas = null;
    }
  }
}
