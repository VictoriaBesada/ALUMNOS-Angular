import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosService } from './course.service';
import { EditarCursoDialogComponent } from './cursos-editar/cursos.component';

@NgModule({
  declarations: [
    ListaCursosComponent,
    EditarCursoDialogComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
