import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursoService } from 'src/app/services/curso.service';
import { Subscriber } from 'rxjs';
import { CursosDialogComponent } from '../cursos-dialog/cursos-dialog.component';


@Component({
  selector: 'app-cursos-observables',
  templateUrl: './cursos-observables.component.html',
  styleUrls: ['./cursos-observables.component.css']
})

export class CursosObservablesComponent implements OnInit {

  cursos: any[] = [];

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

  eliminarCurso(id: number){
    console.log("Eliminando curso ", id);
    this.cursoService.eliminarCurso(id);
  }

  abrirCursoDialog(curso: any){
    const dialogRef = this.dialog.open(CursosDialogComponent, {
      width: '300px',
      data: curso
    });

    dialogRef.afterClosed().subscribe((data)=>{
      console.log(data);
      alert("El curso ha sido modificado!");
    })
  }

}
