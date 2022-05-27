import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { estudiantesService } from 'src/app/shared/services/estudiantes.service';
import { EstudiantesState } from 'src/app/store/estudiantes.state';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnoService: estudiantesService,
    private router: Router) { 
      this.formulario = this.fb.group({
        legajo: new FormControl('', [Validators.required]),
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required]),
        asistencias: new FormControl('', [Validators.required])
      });
    }

  ngOnInit(): void {
  }

  agregarAlumno(){
    console.log(this.formulario.value);
    this.alumnoService.agregarAlumno(this.formulario.value).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['inscripciones']);
  }
}
