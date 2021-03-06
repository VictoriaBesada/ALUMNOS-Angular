import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/core/models/courses';
import { CursosService } from '../../../shared/services/course.service';
import { EditarCursoDialogComponent } from '../cursos-editar/cursos.component';


@Component({
  selector: 'app-lista-cursos',
  templateUrl: './cursos-observables.component.html',
  styleUrls: ['./cursos-observables.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos: Curso[] = [];
  sesionActiva!: any;

  constructor(
    private cursosService: CursosService,
    private dialog: MatDialog,
  ) {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');

  }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  }


  abrirDialogModificar(curso: Curso) {
    this.dialog.open(EditarCursoDialogComponent, {
      width: '300px',
      data: curso
    });
  }

  eliminarCurso(id: string) {
    this.cursosService.eliminarCurso(id).subscribe(console.log);
  }

}