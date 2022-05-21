import { Component } from '@angular/core';

export interface ListaAlumnos {
  legajo: number;
  nombre: string;
  apellido: string;
  asistencias: number;
}

const dataAlumnos: ListaAlumnos[] = [
  {
    legajo: 1001,
    nombre: 'Eduardo',
    apellido: 'Paz',
    asistencias: 13
    },
    {
    legajo: 1002,
    nombre: 'Cristian',
    apellido: 'Besada',
    asistencias: 8
    },
    {
    legajo: 1003,
    nombre: 'Paloma',
    apellido: 'Gras',
    asistencias: 11
    },
    {
      legajo: 1004,
    nombre: 'Claudia',
    apellido: 'Cappelletti',
    asistencias: 12
    },
    {
      legajo: 1005,
    nombre: 'Lucia',
    apellido: 'Marcos',
    asistencias: 13
    },
    {
      legajo: 1006,
    nombre: 'Micaela',
    apellido: 'Husak',
    asistencias: 7
    },
    {
      legajo: 1007,
    nombre: 'Nazarena',
    apellido: 'Gomez',
    asistencias: 8
    },
    {
    legajo: 1008,
    nombre: 'Mateo',
    apellido: 'Gonzalez',
    asistencias: 10
    }
];

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent {
  displayedColumns: string[] = ['legajo','nombre', 'apellido', 'asistencias'];
  dataSource = dataAlumnos;
  clickedRows = new Set<ListaAlumnos>();

}
