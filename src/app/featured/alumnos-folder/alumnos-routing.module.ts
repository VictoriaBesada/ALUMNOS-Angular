import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { ToolbarComponent } from 'src/app/core/components/toolbar/toolbar.component';

const routes: Routes = [
  
  {
      path: '',
      component: MenuComponent,
      children: [
      {
        path: 'alumnos',
        component: ListaAlumnosComponent
      },
      {
        path: 'alumnos/:id',
        component: AlumnosDetalleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
