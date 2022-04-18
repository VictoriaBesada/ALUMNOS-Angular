import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrls: ['./cursos-dialog.component.css']
})

export class CursosDialogComponent implements OnInit {
  
  formulario!: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<CursosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cursoService: CursoService) {
    this.formulario = this.fb.group({
      nombre: new FormControl(data.nombre),
      turno: new FormControl(data.turno)
    });
  }

  ngOnInit(): void {}

  actualizarCurso(){
      let curso: any = {
        id: this.data.id,
        nombre: this.formulario.value.nombre,
        turno: this.formulario.value.turno
      };
      this.cursoService.modificarCurso(curso);
      this.dialogRef.close({ mensaje: "Mensaje" });
    }

}
