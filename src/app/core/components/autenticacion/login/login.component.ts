import { Component, OnDestroy, OnInit } from '@angular/core';
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

  login(){
    const correo = this.formulario.value.correo;
    const contrasena = this.formulario.value.contrasena;

    this.auth.login(correo, contrasena).subscribe((data: Usuario[]) => {
      if(data.length === 1){
        console.log('Usuario logeado exitosamente', data);
        this.auth.establecerSesion(true, data[0]);
        this.router.navigate(['home']);
      }else{
        console.log('Error de autenticacion');
      }
    });
  }

}