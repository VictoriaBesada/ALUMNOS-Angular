import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';

const routes: Routes = [
  {path: '',
  component: ABMDeAlumnosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
