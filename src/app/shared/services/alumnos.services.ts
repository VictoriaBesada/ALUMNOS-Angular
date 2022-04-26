import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';
import { Estudiante } from 'src/app/core/models/alumno';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {
  private alumnos: Estudiante[] = [
    {
      legajo: 1001,
      nombre: 'Claire',
      apellido: 'Albarico',
      asistencias: 13,
      id: 1,
      correo: 'clairealbarico@gmail.com'
      },
      {
      legajo: 1002,
      nombre: 'Cristian',
      apellido: 'Besada',
      asistencias: 8,
      id: 2,
      correo: 'cristianbesada@gmail.com'
      },
      {
      legajo: 1003,
      nombre: 'Paloma',
      apellido: 'Gras',
      asistencias: 11,
      id: 3,
      correo: 'palomagras@gmail.com'
      },
      {
        legajo: 1004,
      nombre: 'Claudia',
      apellido: 'Cappelletti',
      asistencias: 12,
      id: 3,
      correo: 'claucap@gmail.com'
      },
      {
        legajo: 1005,
      nombre: 'Lucia',
      apellido: 'Marcos',
      asistencias: 13,
      id: 4,
      correo: 'lumarcos@gmail.com'
      },
      {
        legajo: 1006,
      nombre: 'Micaela',
      apellido: 'Husak',
      asistencias: 7,
      id: 5,
      correo: 'micahusak@gmail.com'
      },
      {
        legajo: 1007,
      nombre: 'Nazarena',
      apellido: 'Gomez',
      asistencias: 8,
      id: 6,
      correo: 'nazagomez@gmail.com'
      },
      {
      legajo: 1008,
      nombre: 'Mateo',
      apellido: 'Gonzalez',
      asistencias: 10,
      id: 7,
      correo: 'mateogonz@gmail.com'
      }
  ];

  private alumnoObservable: Observable<Estudiante[]>;
  private alumnoSubject: Subject<Estudiante[]>;
  datos$: Observable<Estudiante[]>;
  
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
    let filtrado: Estudiante[] = []
    filtrado = this.alumnos.filter((valor) => {
      if(valor.legajo != legajo){
        return valor;
      }else{
        return undefined;
      }
    });
  }

  agregarAlumno(alumno: Estudiante){
    this.alumnos.push(alumno);
    this.alumnoSubject.next(this.alumnos);
  }

  obtenerDatosFiltrados(): Observable<Estudiante[]> {
    return this.datos$.pipe(
      map(alumnos => alumnos.filter(alumno => alumno.asistencias < 10))
    );
  }
  
}