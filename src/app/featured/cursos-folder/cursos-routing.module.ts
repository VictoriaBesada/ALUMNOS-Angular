import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';


const routes: Routes = [
  {path: '',
  component: ListaCursosComponent,

  children: [
  {path: ':id', component: CursosDetalleComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
