import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

// Imports de idioma
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

// Mis componentes
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { LoadingComponent } from './component/share/loading/loading.component';
import { NavbarComponent } from './component/share/navbar/navbar.component';
import { TarjetasComponent } from './component/share/tarjetas/tarjetas.component';
import { PaginacionComponent } from './component/share/paginacion/paginacion.component';
import { PeliculaComponent } from './component/pelicula/pelicula.component';


// Pipes
import { ImagenPipe } from './pipes/imagen.pipe';
import { GenerosPipe } from './pipes/generos.pipe';
import { ShortTextPipe } from './pipes/short-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    NavbarComponent,
    TarjetasComponent,
    PeliculaComponent,
    ImagenPipe,
    GenerosPipe,
    ShortTextPipe,
    PaginacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
