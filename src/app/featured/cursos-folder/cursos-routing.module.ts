import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
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
