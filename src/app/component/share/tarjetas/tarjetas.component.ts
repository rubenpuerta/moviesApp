import { Component, OnInit, Input } from '@angular/core';
import { MovieDbService } from '../../../providers/movie-db.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() origen: string = '';
  @Input() busqueda: string = '';
  @Input() pagina: number = 0;

  constructor( public _mDB: MovieDbService ) { }

  ngOnInit() {
  }

}
