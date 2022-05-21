import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';
import { Cursos } from './cursos-component/cursos-component.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { ToolbarComponent } from 'src/app/core/components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'cursos',
        component: ListaCursosComponent
      },
      {
        path: 'cursos/:id',
        component: CursosDetalleComponent
      },
      {
        path: 'nuevo-curso',
        component: NuevoCursoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
