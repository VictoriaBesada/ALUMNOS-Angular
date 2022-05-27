import { Pipe, PipeTransform } from '@angular/core';
import { Roles } from '../clases/roles';


@Pipe({
    name: 'formatoDatosGeneral'
})
export class formatoDatosGeneralPipe implements PipeTransform {

    transform(value: any, tipo: string): unknown {
        let valor: string = value;
        if (tipo == 'nombre') {
            valor = `${value?.person?.nombre}`;
        }
        if (tipo == 'apellido') {
            valor = `${value?.person?.apellido}`;
        }
        if (tipo == 'legajo') {
            valor = `${value?.person?.legajo}`;
        }
        if (tipo == 'rol') {
            valor = Roles.getRoleName(value?.person.rol);
        }
        if (tipo == 'asistencias') {
            valor = `${value?.person?.asistencias}`;
        }



        if (tipo == 'activo') {
            if (value?.person.active) {
                valor = 'Activo';
            } else {
                valor = 'Inactivo';
            }
        }

        if (tipo == 'correo') {

            valor = `${value?.person?.correo}`;
            //console.log(value);
        }

        return valor;
    }

}