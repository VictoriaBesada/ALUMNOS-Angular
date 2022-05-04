import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';

const routes: Routes = [
  {path: '',
  component: MenuComponent,

  children: [
  {path: 'inscripciones', component: ABMDeAlumnosComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
