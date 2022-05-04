import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app.material.module';
import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListaAlumnosComponent,
    AlumnosDetalleComponent,
  ],
  imports: [
    CommonModule,
    EstudiantesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    MatTableModule

  ],
  exports: [
    ListaAlumnosComponent,
    AlumnosDetalleComponent,
  ]

})
export class AlumnosModule { }