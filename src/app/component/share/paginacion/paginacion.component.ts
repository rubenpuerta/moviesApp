import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieDbService } from '../../../providers/movie-db.service';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styles: []
})
export class PaginacionComponent implements OnInit {
  @Input() origen:string = '';
  @Input() pagina: number;
  @Output() paginaAct: EventEmitter<any>;
  
  pagina1:number;
  pagina2:number;
  pagina3:number;
  cmdAnterior: boolean;
  cmdSiguiente: boolean;
  paginaActual: number;
  peliculas: any[];
  loading:boolean;
  
  constructor( 
    public _mDB: MovieDbService,
  ) { 
    this.paginaAct = new EventEmitter();
    this.pagina1 = 1;
    this.pagina2 = 2;
    this.pagina3 = 3;
    this.cmdAnterior = true;
    this.cmdSiguiente = false;

  }

  ngOnInit() {
    this.paginaActual = this.pagina;
    this.cargaNumeroPaginas();
  }

  cargaNumeroPaginas() {
      if ( this.paginaActual <= 3) {
        this.pagina1 = this.paginaActual;
        this.pagina2 = this.paginaActual + 1;
        this.pagina3 = this.paginaActual + 2;
        if (this.paginaActual > 1 ) {
          this.cmdAnterior = false;
        } else {
          this.cmdAnterior = true;
        }
        this.cmdSiguiente = false;
      } else if ( this.paginaActual > 3 && this.paginaActual < this._mDB.filmPages) {
        this.pagina1 = this.paginaActual - 1;
        this.pagina2 = this.paginaActual;
        this.pagina3 = this.paginaActual + 1;
        this.cmdAnterior = false;
        this.cmdSiguiente = false;
      } else if ( this.paginaActual === this._mDB.filmPages) {
        this.pagina1 = this.paginaActual - 2;
        this.pagina2 = this.paginaActual - 1;
        this.pagina3 = this.paginaActual;
        this.cmdAnterior = false;
        this.cmdSiguiente = true;
      }
  }
  
  cargaPagina ( pagina:string | number ) {
    let urlPage:any;
    switch (pagina) {
      case '>':
        urlPage = this.paginaActual + 1;
        break;
      case '<':
        urlPage = this.paginaActual - 1;
        break;
        default:
          if ( pagina >= 1 && pagina <= this._mDB.filmPages) {
            urlPage = pagina;
          }
        break;
    }
    this.paginaActual = urlPage;
    this.paginaAct.emit( urlPage );
  }
}
