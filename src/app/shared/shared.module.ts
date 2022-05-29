import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreCurso } from './pipes/nombre-cursos.pipe';
import { HeadingDirective } from './directives/heading.directive';
import { HrDirective } from './directives/hr.directive';
import { formatoDatosGeneralPipe } from './pipes/formatos.pipe';



@NgModule({
  declarations: [
    NombreCurso,
    HeadingDirective,
    HrDirective,
    formatoDatosGeneralPipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    NombreCurso,
    AppMaterialModule,
    ReactiveFormsModule,
    HeadingDirective,
    HrDirective,
    formatoDatosGeneralPipe,
  ]
})
export class SharedModule { }