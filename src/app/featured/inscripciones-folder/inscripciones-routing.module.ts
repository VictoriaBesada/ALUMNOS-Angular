import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { ABMDeAlumnosComponent } from './abm-de-alumnos/abm-de-alumnos.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'inscripciones',
        component: ABMDeAlumnosComponent
      },
      {
        path: 'inscripciones/:id',
        component: ABMDeAlumnosComponent
      },
      {
        path: 'nuevo-alumno',
        component: NuevoAlumnoComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscripcionesRoutingModule { }
