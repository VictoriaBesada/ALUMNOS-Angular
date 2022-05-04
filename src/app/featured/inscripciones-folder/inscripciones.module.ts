import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { AppMaterialModule } from 'src/app/shared/app.material.module';


@NgModule({
  declarations: [
    ABMDeAlumnosComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ABMDeAlumnosComponent
  ]
})
export class InscripcionesModule { }