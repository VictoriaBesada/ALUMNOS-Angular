import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';
import { Cursos } from './cursos-component/cursos-component.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';

const routes: Routes = [
  {path:'', component: Cursos, children: [
    {path: ':id', component: CursosDetalleComponent},
    {path: 'lista', component: ListaCursosComponent},
    {path: 'nuevo-curso', component: NuevoCursoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
