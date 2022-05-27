import { Component, OnInit } from '@angular/core';
import { selectStudentId } from 'src/app/store/selector/estudiante.selector';
import { LoadStudentIdSuccess } from 'src/app/store/action/estudiante.action';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { PersonasServicios } from 'src/app/shared/services/personas.services';
import { LoadStudents, LoadStudentsSuccess } from 'src/app/store/action/estudiante.action';
import { AppStore } from 'src/app/store/app.store';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-alumnos-detalle',
  templateUrl: './alumnos-detalle.component.html',
  styleUrls: ['./alumnos-detalle.component.css']
})
export class AlumnosDetalleComponent implements OnInit {

  legajo: number = 0;
  routeSubcription!: Subscription;

  estudiante: any;
  estudiante$!: Observable<any>
  estudianteSuscripcion!: any;
  serviceURL = "https://626765be78638336421ee4dd.mockapi.io/estudiantes";

  constructor(
    private activatedRoute: ActivatedRoute,
    private PersonasServicios: PersonasServicios,
    private router: Router,
    private store: Store<AppStore>
  ) { }

  ngOnInit(): void {
    this.routeSubcription = this.activatedRoute.params.subscribe(
      (params) => {
        this.legajo = params['id'];

        this.cargarEstudiante();



      });
  }

  cargarEstudiante() {
    this.store.dispatch(LoadStudents());
    this.PersonasServicios.obtenerDatosPersonasObservableId(this.legajo, 4)
      .subscribe((datos) => {
        this.estudiante = datos[0];
        this.store.dispatch(LoadStudentIdSuccess({ estudiantes: datos }));

      });
    this.estudiante = this.store.select(selectStudentId)
  }

}
