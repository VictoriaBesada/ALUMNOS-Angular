import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/courses';
import { Profesor } from 'src/app/core/models/profesores';
import { CursosService } from '../../../shared/services/course.service';
import { EditarCursoDialogComponent } from '../cursos-editar/cursos.component';
@Component({
  selector: 'app-lista-cursos',
  templateUrl: './cursos-observables.component.html',
  styleUrls: ['./cursos-observables.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe((cursos: Curso[])=>{
      this.cursos = cursos;
    });
  }

  abrirDialogModificar(curso: Curso){
    this.dialog.open(EditarCursoDialogComponent, {
      width: '300px',
      data: curso
    });
  }

  eliminarCurso(id: string){
    this.cursosService.eliminarCurso(id).subscribe(console.log);
  }

}