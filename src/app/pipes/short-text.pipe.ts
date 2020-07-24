import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortaPalabras',
})
export class ShortTextPipe implements PipeTransform {
  transform(cadena: any, nPalabras?: number): string {
    let lPalabras: number = 30;
    let texto: string[];
    let resultado: string = '';
    if (nPalabras && nPalabras > 0) {
      lPalabras = nPalabras;
    }
    if (cadena.length > 0) {
      texto = cadena.split(' ');
      if (texto.length > lPalabras) {
        texto = texto.slice(0, lPalabras);
        resultado = texto.join(' ');
        if (resultado.slice(-1) !== '.') {
          resultado += '...';
        }
      } else {
        resultado = cadena;
      }
    }
    return resultado;
  }
}
