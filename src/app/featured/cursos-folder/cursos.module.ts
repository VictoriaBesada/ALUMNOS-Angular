import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosService } from '../../shared/services/course.service';
import { EditarCursoDialogComponent } from './cursos-editar/cursos.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';
import { Cursos } from './cursos-component/cursos-component.component';

@NgModule({
  declarations: [
    ListaCursosComponent,
    EditarCursoDialogComponent,
    CursosDetalleComponent,  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
  ],
  exports: [
    ListaCursosComponent,
    EditarCursoDialogComponent,
    CursosDetalleComponent,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
