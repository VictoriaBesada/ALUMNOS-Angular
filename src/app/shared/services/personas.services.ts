import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject } from 'rxjs';
import { Personas } from '../clases/personas';
import { Estudiantes } from 'src/app/core/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class PersonasServicios {

  serviceURL = "https://626765be78638336421ee4dd.mockapi.io/estudiantes";

  estudiantes$!: Observable<Estudiantes[]>;
  personas$!: Observable<Personas[]>;



  constructor(
    private http: HttpClient,
  ) {
    this.estudiantes$ = this.obtenerDatosEstudiantesObservable();

  }

  obtenerDatosPersonasObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosEstudiantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Rol', "4");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosProfesoresObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Rol', "2");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta;
  }

  obtenerDatosAyudantesObservable(): Observable<any> {
    //call asmx to get courses

    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', "");
    params = params.append('Rol', "3");
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  obtenerDatosPersonasObservableId(id: number, pIdRole: number): Observable<any> {
    //call asmx to get courses
    /*gammar*/
    let params = new HttpParams();
    params = params.append('method', 'getPersons');
    params = params.append('IdStudent', id.toString());
    params = params.append('Rol', pIdRole.toString());
    let Respuesta = this.http.get(this.serviceURL, { params: params });
    // console.log(this.serviceURL + "?" + params.toString());
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  crearActualizarPersonaObservable(data: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('method', 'ABMPersons');
    params = params.append('IdPersona', data.id);
    params = params.append('Legajo', data.legajo);
    params = params.append('Nombre', data.nombre);
    params = params.append('Apellido', data.apellido);
    params = params.append('Contrasena', data.contrasena);
    params = params.append('Correo', data.correo);
    params = params.append('Rol', data.rol);
    params = params.append('Imagen', data.imagen);
    params = params.append('Active', data.active == true ? "1" : "0");
    params = params.append('Id', data.id);
    // console.log(params)
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('Content-Type', 'application/json');

    let Respuesta = this.http.get(this.serviceURL, { params: params });
    return Respuesta.pipe(catchError(this.httpMensajeError));
  }

  private httpMensajeError(errorResponse: HttpErrorResponse) {
    let mensajeError = new Subject<string>();

    if (errorResponse.status == 200) {
      console.warn("Metodo no encontrado");
    } else {
      if (errorResponse.error instanceof ErrorEvent) {
        console.warn("Error en el front end: " + errorResponse.error.message);
      } else {
        console.warn("Error en el back end: " + errorResponse.error.Message);
      }
    }
    return mensajeError;
  }


}
