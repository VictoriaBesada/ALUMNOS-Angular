import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/core/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  sesion: any = {
    activa: false,
    usuario: {}
  }

  constructor(
    private http: HttpClient
  ) {}

  login(correo: string, contrasena: string): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${environment.apiURL}/usuarios`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.filter(u => u.correo === correo && u.contrasena === contrasena)
      })
    )
  }

  establecerSesion(sesionActiva: boolean, usuario: Usuario){
    this.sesion = {
      activa: sesionActiva,
      usuario: usuario
    }

    localStorage.setItem("sesion", JSON.stringify(this.sesion));
  }

  logout(){
    this.sesion = {
      activa: false,
      usuario: {}
    }
    localStorage.removeItem('sesion');
  }
}

