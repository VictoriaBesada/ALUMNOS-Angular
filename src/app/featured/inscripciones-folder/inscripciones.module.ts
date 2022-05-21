import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { AppMaterialModule } from 'src/app/shared/app.material.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';


@NgModule({
  declarations: [
    ABMDeAlumnosComponent,
    NuevoAlumnoComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  exports: [
    ABMDeAlumnosComponent,
    NuevoAlumnoComponent
  ]
})
export class InscripcionesModule { }
