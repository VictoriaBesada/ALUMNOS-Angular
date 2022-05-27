import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Estudiantes } from 'src/app/core/models/alumno';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

   private baseURL = 'https://626765be78638336421ee4dd.mockapi.io';
  
   constructor(private http: HttpClient) { }

   getRandomUsers(): Observable<Estudiantes> {
    const URL = `${this.baseURL}/estudiantes`;
    return this.http.get<Estudiantes>(URL);
   }
}