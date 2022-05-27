import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario';
import { catchError, filter, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API_URL = 'https://626765be78638336421ee4dd.mockapi.io';
  constructor(private http: HttpClient) { }

  // obtenerUsuario(id:number) {
  //   return this.http.get(`https://626765be78638336421ee4dd.mockapi.io/usuarios/${id}`)
  // }

  obtenerUsuarios() {
    return this.http.get<Usuario[]>(`${this.API_URL}/usuarios`, {
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
}
