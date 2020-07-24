import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../providers/movie-db.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  filmID:string;
  pagAnt:string;
  texto:string;
  pagBusqueda:number;
  pelicula:any;
  generos:any;

  constructor( 
    public _mDB: MovieDbService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.filmID = '';
    this.pagAnt= '';
    this.texto = ""
    this.pagBusqueda = 0;
   }

  ngOnInit() {
    this._route.params.subscribe(
      param => {
        this.filmID = param['id'];
        this.pagAnt = param['origen'];
        this.texto = param['busqueda'];
        this.pagBusqueda = param['pagina'];
      },
      error => console.log(error)
    );
    this.getFilm( this.filmID );
  }

  volver() {
    let volver = '';
    if (this.pagAnt) {
      volver = this.pagAnt;
      if (this.pagBusqueda > 0) {
        if  ( this.pagAnt === 'home') {
          volver += `/${this.pagBusqueda}`;
        } else if (this.pagAnt === 'search') {
          volver += `/${this.texto}/${this.pagBusqueda}`;
        }
      }
    }
    this._router.navigate([volver]);
  }


  getFilm ( filmID:string  ){
    this._mDB.getFilm( filmID ).subscribe (
      datos => { 
        console.log(datos);
        return this.pelicula = datos},
      error => console.log(error)
    );
  }
}
