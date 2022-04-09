import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos : any[] = [
    {
    nombre: 'Eduardo',
    apellido: 'Paz',
    asistencias: 13
    },
    {
    nombre: 'Cristian',
    apellido: 'Besada',
    asistencias: 8
    },
    {
    nombre: 'Paloma',
    apellido: 'Gras',
    asistencias: 11
    },
    {
    nombre: 'Claudia',
    apellido: 'Cappelletti',
    asistencias: 12
    },
    {
    nombre: 'Lucia',
    apellido: 'Marcos',
    asistencias: 13
    },
    {
    nombre: 'Micaela',
    apellido: 'Husak',
    asistencias: 7
    },
    {
    nombre: 'Nazarena',
    apellido: 'Gomez',
    asistencias: 8
    },
    {
    nombre: 'Mateo',
    apellido: 'Gonzalez',
    asistencias: 10
    },
    {
    nombre: 'Milagros',
    apellido: 'Castro',
    asistencias: 9
    },
    {
    nombre: 'Rocio',
    apellido: 'Rodriguez',
    asistencias: 6
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
