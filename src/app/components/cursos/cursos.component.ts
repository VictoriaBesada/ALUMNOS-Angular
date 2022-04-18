import { Component, OnInit, OnDestroy } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[] = [];
  cursosPromise!: Promise<any>;
  cursosSuscripcion!: any;

  constructor (private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursosPromise = this.cursoService.obtenerCursosPromise();
    this.cursosPromise
      .then((cursos) => {
        console.log("Obtuve los datos");
        this.cursos = cursos;
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        console.log("Esto se ejecuta independiente del resultado del promise");
      });
  }

  ngOnDestroy(): void {
    this.cursosSuscripcion.unsubscribe();
  }
}