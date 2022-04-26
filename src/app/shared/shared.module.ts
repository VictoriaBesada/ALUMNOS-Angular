import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCurso } from './pipes/nombre-cursos.pipe';



@NgModule({
  declarations: [
    NombreCurso,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreCurso,
  ]
})
export class SharedModule { }
