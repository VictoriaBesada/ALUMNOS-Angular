import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumnos.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.css']
})

export class ABMDeAlumnosComponent implements OnInit {

  alumnos: any;    
  personasFiltradas$!: Observable<Alumno[]>

  
  formulario: FormGroup = new FormGroup({
    legajo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    asistencias: new FormControl('', [Validators.required])
  });

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.personasFiltradas$ = this.alumnoService.obtenerDatosFiltrados();
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
