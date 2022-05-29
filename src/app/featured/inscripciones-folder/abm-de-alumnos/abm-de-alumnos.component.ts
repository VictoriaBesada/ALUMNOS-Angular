import { Component, OnInit } from '@angular/core';
import { Estudiantes } from 'src/app/core/models/alumno';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { estudiantesService } from 'src/app/shared/services/estudiantes.service';
import { EditarAlumnoComponent } from '../editar-alumno/editar-alumno.component';


@Component({
  selector: 'app-abm-de-alumnos',
  templateUrl: './abm-de-alumnos.component.html',
  styleUrls: ['./abm-de-alumnos.component.css']
})

export class ABMDeAlumnosComponent implements OnInit {

  estudiantes: Estudiantes[] = [];
  formulario: FormGroup;

  constructor(private alumnoService: estudiantesService,
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog) {

    this.formulario = this.fb.group({
      legajo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      asistencias: new FormControl('', [Validators.required])
    });

  }


  ngOnInit(): void {
    this.alumnoService.obtenerEstudiantes().subscribe((estudiantes: Estudiantes[]) => {
      this.estudiantes = estudiantes;
    });
  }

  abrirDialogModificar(estudiante: Estudiantes) {
    this.dialog.open(EditarAlumnoComponent, {
      width: '300px',
      data: estudiante
    });
  }

  eliminarAlumno(id: number) {
    this.alumnoService.eliminarAlumno(id).subscribe(console.log);
  }

  agregarAlumno() {
    this.alumnoService.agregarAlumno(this.formulario.value);
  }

}
