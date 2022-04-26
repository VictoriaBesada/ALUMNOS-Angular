import { Injectable } from '@angular/core';
import { filter, map, from, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class CursoService {

  serviceURL = "https://626765be78638336421ee4dd.mockapi.io/api/v1/cursos/cursos";

  cursos: Array<any>  = [
    {id: 1, nombre: "Angular", turno: 'noche', camada: '342342', descripcion: 'ksejfkefkj'},
    {id: 2, nombre: "ReactJS", turno: 'tarde', camada: '45645', descripcion: 'ksejfkefkj'},
    {id: 3, nombre: "VueJS", turno: 'tarde', camada: '5325', descripcion: 'ksejfkefkj'},
    {id: 4, nombre: "TypeScript", turno: 'noche', camada: '565533', descripcion: 'ksejfkefkj'},
    {id: 5, nombre: "RxJS", turno: 'tarde', camada: '73735', descripcion: 'ksejfkefkj'},
    {id: 6, nombre: "JavaScript", turno: 'noche', camada: '14545', descripcion: 'ksejfkefkj'},
  ];

  cursosPromise!: Promise<any>;
  cursos$: Observable<any>;

  constructor(    private http: HttpClient
    ) { 

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
obtenerDatosCursosObservable(): Observable<any> {

  let params = new HttpParams();
  params = params.append('method', 'getCourses');

  params = params.append('IdCourse', "");
  let Respuesta = this.http.get(this.serviceURL, { params: params });


  return Respuesta;

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


enableDisableCourse(data: any): Observable<any> {
  let params = new HttpParams();
  params = params.append('method', 'ABMCourse');
  params = params.append('IdCurso', data.id);
  params = params.append('Camada', data.camada);
  params = params.append('nombre', data.nombre);
  params = params.append('turno', data.turno);
  params = params.append('descripcion', data.descripcion);
  params = params.append('Active', data.active == true ? "1" : "0");
  let httpHeaders = new HttpHeaders();

  httpHeaders = httpHeaders.append('Content-Type', 'application/json');

  let Respuesta = this.http.get(this.serviceURL, { params: params });
  return Respuesta;
}
}
