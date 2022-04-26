import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreCurso'
})
export class NombreCurso implements PipeTransform {

  transform(value: any, tipo: string): string {
    let valor: string = "";
    if (tipo == 'activo') {
      if (value.active) {
        valor = 'Activo';
      } else {
        valor = 'Inactivo';
      }
    }

    return valor;
  }

}
