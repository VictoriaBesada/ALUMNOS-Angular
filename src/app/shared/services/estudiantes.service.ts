import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, filter, Observable, throwError } from 'rxjs';
import { Estudiantes } from "src/app/core/models/alumno";
import { Subject, map, of } from 'rxjs';


@Injectable({
    providedIn: "root"
})

export class estudiantesService {

    private readonly API_URL = 'https://626765be78638336421ee4dd.mockapi.io';


    constructor(private http: HttpClient) { }

    obtenerEstudiantes() {
        return this.http.get<Estudiantes[]>(`${this.API_URL}/estudiantes`, {
            headers: new HttpHeaders({
              'content-type': 'application/json'
            })
          }).pipe(catchError(this.manejoError));
    }

    private manejoError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
          console.warn('Error en el frontend:', error.error.message)
        }else{
          console.warn('Error en el backend', error.status, error.message)
        }
    
        return throwError(() => 'Error de comunicación HTTP');
        
      }

      eliminarAlumno(id: number){
        return this.http.delete<Estudiantes>(`${this.API_URL}/estudiantes/${id}`).pipe(catchError(this.manejoError));
      }

      modificarAlumno(estudiantes: Estudiantes){
        return this.http.put(`${this.API_URL}/estudiantes/${estudiantes.id}`, estudiantes);
      }
      // agregarAlumno(estudiante: Estudiante){
      //   return this.http.post<Estudiante>(`${this.API_URL}/estudiantes/`, estudiante).pipe(catchError(this.manejoError));
      // }

      agregarAlumno(estudiante: Estudiantes){
        return this.http.post<Estudiantes>(`${this.API_URL}/estudiantes/`, estudiante).pipe(catchError(this.manejoError));
      }

}