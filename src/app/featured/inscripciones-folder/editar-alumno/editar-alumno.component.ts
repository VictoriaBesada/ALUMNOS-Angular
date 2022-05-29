import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiantes } from 'src/app/core/models/alumno';
import { estudiantesService } from 'src/app/shared/services/estudiantes.service';


@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})

export class EditarAlumnoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Estudiantes,
    private fb: FormBuilder,
    private estudianteService: estudiantesService

  ) {
    this.formulario = this.fb.group({
      nombre: new FormControl(this.data.nombre, [Validators.required]),
      apellido: new FormControl(this.data.apellido, [Validators.required]),
      correo: new FormControl(this.data.correo, [Validators.required]),
      telefono: new FormControl(this.data.telefono, [Validators.required]),
      direccion: new FormControl(this.data.direccion, [Validators.required]),
      legajo: new FormControl(this.data.legajo, [Validators.required]),
      asistencias: new FormControl(this.data.asistencias, [Validators.required])
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  editarAlumno() {
    let estudiante: Estudiantes = {
      cursos: this.data.cursos,
      id: this.data.id,
      imagen: this.data.imagen,
      nombre: this.data.nombre,
      apellido: this.data.apellido,
      correo: this.data.correo,
      legajo: this.formulario.value.legajo,
      asistencias: this.formulario.value.asistencias,
      telefono: this.formulario.value.telefono,
      direccion: this.formulario.value.direccion,
    }
    console.log(estudiante);
    this.estudianteService.modificarAlumno(estudiante).subscribe(console.log);
    this.dialogRef.close();
  }

}




