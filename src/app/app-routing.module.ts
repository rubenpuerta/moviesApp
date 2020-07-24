import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:pagina', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:busqueda', component: SearchComponent },
  { path: 'search/:busqueda/:pagina', component: SearchComponent },
  { path: 'film/:id/:origen', component: PeliculaComponent },
  { path: 'film/:id/:origen/:busqueda/:pagina', component: PeliculaComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
