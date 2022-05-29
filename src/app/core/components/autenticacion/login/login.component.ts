import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    correo: new FormControl(''),
    contrasena: new FormControl('')
  });

  constructor(
    private auth: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    const correo = this.formulario.value.correo;
    const contrasena = this.formulario.value.contrasena;
    this.auth.login(correo, contrasena).subscribe((usuarioLogeado: Usuario[]) => {
      if (usuarioLogeado.length === 1) {
        this.auth.establecerSesion(true, usuarioLogeado[0]);
        this.router.navigate(['home']);
      } else {
        // console.log('Error de autenticacion');
      }
    });
  }

}