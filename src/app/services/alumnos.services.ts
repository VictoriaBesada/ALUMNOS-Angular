import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { Alumno } from '../models/alumno';


@Injectable({
  providedIn: 'root'
})

export class AlumnoService {
  private alumnos: Alumno[] = [
    {
      legajo: 1001,
      nombre: 'Claire',
      apellido: 'Albarico',
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

  private alumnoObservable: Observable<Alumno[]>;
  private alumnoSubject: Subject<Alumno[]>;
  datos$: Observable<Alumno[]>;
  
  constructor(){
    this.datos$ = of(this.alumnos);
    this.alumnoSubject = new Subject();
    this.alumnoObservable = new Observable((suscripcion) => {
      suscripcion.next(this.alumnos);
    });
  }

  obtenerAlumnosPromise(){
    let p = new Promise((resolve, reject) => {
      const error = false;

      if(!error){
        resolve(this.alumnos);
      }else{
        reject('Hubo un error');
      }
    });

    return p;
  }

  obtenerAlumnosObservable(){
    return this.alumnoObservable;
  }

  eliminarAlumno(legajo: number){
    let filtrado: Alumno[] = []
    filtrado = this.alumnos.filter((valor) => {
      if(valor.legajo != legajo){
        return valor;
      }else{
        return undefined;
      }
    });
  }

  agregarAlumno(alumno: Alumno){
    this.alumnos.push(alumno);
    this.alumnoSubject.next(this.alumnos);
  }

  obtenerDatosFiltrados(): Observable<Alumno[]> {
    return this.datos$.pipe(
      map(alumnos => alumnos.filter(alumno => alumno.asistencias < 10))
    );
  }
  
}