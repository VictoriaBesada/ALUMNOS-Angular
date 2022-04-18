import { Injectable } from '@angular/core';
import { filter, map, from, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CursoService {

  cursos: Array<any>  = [
    {id: 1, nombre: "Angular", turno: 'noche'},
    {id: 2, nombre: "ReactJS", turno: 'tarde'},
    {id: 3, nombre: "VueJS", turno: 'tarde'},
    {id: 4, nombre: "TypeScript", turno: 'noche'},
    {id: 5, nombre: "RxJS", turno: 'tarde'},
    {id: 6, nombre: "JavaScript", turno: 'noche'},
  ];

  cursosPromise!: Promise<any>;
  cursos$: Observable<any>;

  constructor() { 

  this.cursos$ = new Observable((suscripcion) => {
    if(this.cursos.length > 0){
      suscripcion.next(this.cursos);
      suscripcion.complete();
    }else{
      suscripcion.error("Obvservable no tiene datos para enviar");
    }
  });

  this.cursosPromise = new Promise((resolve, reject) => {
    if(this.cursos.length > 0){
      resolve(this.cursos);
    }else{
      reject(this.cursos);
    }
  });

}

obtenerCursosPromise(){
  return this.cursosPromise;
}

obtenerCursosObservable(){
  return this.cursos$;
}

eliminarCurso(id: number){
  for(let i=0; i<this.cursos.length; i++){
    if(this.cursos[i].id == id){
      this.cursos.splice(this.cursos[i], 1);
    }
  }
}

modificarCurso(curso: any){
  for(let i=0; i<this.cursos.length; i++){
    if(this.cursos[i].id == curso.id){
      this.cursos[i] = curso;
    }
  }
}

}
