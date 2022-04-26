import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cursos } from './cursos-component/cursos-component.component';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';

const routes: Routes = [
  {path:'', component: Cursos, children: [
    {path: 'lista', component: ListaCursosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
