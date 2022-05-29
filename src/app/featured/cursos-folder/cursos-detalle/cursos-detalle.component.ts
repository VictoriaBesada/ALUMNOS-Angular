import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CursosService } from '../../../shared/services/course.service';
import { AppStore } from 'src/app/store/app.store';
import { Store } from '@ngrx/store';
import { selectCourseId } from 'src/app/store/selector/curso.selector';
import { CargaCursos, CargaIdCursoExitosa } from 'src/app/store/action/curso.action';


@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrls: ['./cursos-detalle.component.css']
})

export class CursosDetalleComponent implements OnInit {

  sesionActiva!: any;
  courseId: number = 0;
  routeSubcription!: Subscription;
  Curso: any;
  Curso$!: Observable<any>
  CursoSuscripcion!: any;
  serviceURL = "https://626765be78638336421ee4dd.mockapi.io/cursos";
  ABMInscripciones: boolean = false;
  currentPerson: number = 0;
  readonly: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService,
    public dialogoRef: MatDialog,
    private store: Store<AppStore>
  ) {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.courseId = params['id'];
        this.obtenerCurso(this.courseId);
      });

  }

  obtenerCurso(id: number) {
    this.store.dispatch(CargaCursos());

    this.cursoService.obtenerDatosCursoObservableById(id)
      .subscribe((datos) => {
        this.Curso = datos[0];
        this.store.dispatch(CargaIdCursoExitosa({ cursos: datos }));

      });
    this.Curso = this.store.select(selectCourseId)

  }

  ngOnDestroy() {
    this.routeSubcription.unsubscribe();
  }
}
