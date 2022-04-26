import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { CursoService } from 'src/app/shared/services/curso.service';
import { Subscriber } from 'rxjs';
import { Observable, Subscription } from 'rxjs';
import { CursosDialogComponent } from '../cursos-dialog/cursos-dialog.component';


@Component({
  selector: 'app-cursos-observables',
  templateUrl: './cursos-observables.component.html',
  styleUrls: ['./cursos-observables.component.css']
})

export class CursosObservablesComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  cursos: any[] = [];
  Cursos$!: Observable<any>
  CursosSuscripcion!: any;
  administraInscripcion: boolean = false;
  columnas: string[] = ['camada', 'nombre', 'descripcion', 'turno', 'habilitado', 'opciones']




  constructor (public dialog: MatDialog, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.obtenerCursosObservable().subscribe({
      next: (cursos)=>{
        this.cursos = cursos;
      },
      error: (error) => {
        console.error("Ocurrio un error", error);
      }
    });
  }
  obtenerCursos() {
    this.Cursos$ = this.cursoService.obtenerDatosCursosObservable();
    // this.filterCourses()
    this.CursosSuscripcion = this.Cursos$

      .subscribe((datos) => {
        this.cursos = datos;
      });
  }

  // eliminarCurso(id: number){
  //   console.log("Eliminando curso ", id);
  //   this.cursoService.eliminarCurso(id);
  // }

  // abrirCursoDialog(curso: any){
  //   const dialogRef = this.dialog.open(CursosDialogComponent, {
  //     width: '300px',
  //     data: curso
  //   });

  //   dialogRef.afterClosed().subscribe((data)=>{
  //     console.log(data);
  //     alert("El curso ha sido modificado!");
  //   })
  // }

  editCourse(course: any) {
    const dialogRef = this.dialog.open(CursosDialogComponent, {
      data: {
        course: course,
        opcion: 'editar'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      let newCourse = result.data[1];
      this.cursos.push(newCourse);
      let data = {
        id: newCourse.id,
        camada: newCourse.camada,
        nombre: newCourse.nombre,
        descripcion: newCourse.descripcion,
        turno: newCourse.turno,
      }
      this.table.renderRows();

    });
  }

  enableDisableCourse(course: any, enable: boolean) {
    let data = {
      id: course.id,
      nombre: course.nombre,
      camada: course.camada,
      descripcion: course.descripcion,
      turno: course.turno,
      active: enable
    }
    this.cursoService.enableDisableCourse(data).toPromise().then((datos) => {
      this.obtenerCursos();
    });


  }

}
