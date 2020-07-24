import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../../providers/movie-db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  peliculas: any[];
  loading:boolean;
  paginaActual: number;

  constructor( 
    public _mDB: MovieDbService,
    private _route: ActivatedRoute,
  ) {
    this.paginaActual = 1;

    this._route.params.subscribe (
      params => {
        if ( params['pagina'] ){
          this.paginaActual = params['pagina'];
        }
      }
    );
    this.getFilms( this.paginaActual.toString() );
   }

  ngOnInit() {
  }

  getFilms( pagina?:string ) {
    this.loading = true;
    this._mDB.getFilms(pagina).subscribe(
      pelis => {
        this.peliculas = pelis;
        this.paginaActual = parseInt(pagina);
        this.loading = false;
      }
    );
  }
}
