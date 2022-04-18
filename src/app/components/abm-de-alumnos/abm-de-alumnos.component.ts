import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumnos.services';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.css']
})

export class ABMDeAlumnosComponent implements OnInit {

  alumnos: any;
  
  formulario: FormGroup = new FormGroup({
    legajo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    asistencias: new FormControl('', [Validators.required])
  });

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos)=>{
      this.alumnos = alumnos;
    })
  }

  eliminarAlumno(legajo: number){
    this.alumnoService.eliminarAlumno(legajo);
  } 

  agregarAlumno(){
    this.alumnoService.agregarAlumno(this.formulario.value);
  }

}
