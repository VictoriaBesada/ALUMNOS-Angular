import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreCurso } from './pipes/nombre-cursos.pipe';



@NgModule({
  declarations: [
    NombreCurso
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    NombreCurso,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }