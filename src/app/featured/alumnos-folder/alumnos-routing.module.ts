import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';

const routes: Routes = [
  {path: '',
  component: ListaAlumnosComponent,
  children: [
  {path: ':id', component: AlumnosDetalleComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
