import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/shared/services/alumnos.services';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    legajo: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    asistencias: new FormControl('', [Validators.required])
  });

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }


  agregarAlumno(){
    this.alumnoService.agregarAlumno(this.formulario.value);
  }
}
