import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABMDeAlumnosComponent } from '../inscripciones-folder/abm-de-alumnos/abm-de-alumnos.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.guard';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';

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
