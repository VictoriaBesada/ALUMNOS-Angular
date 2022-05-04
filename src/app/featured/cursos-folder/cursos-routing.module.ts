import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './cursos-lista/cursos-observables.component';
import { CursosDetalleComponent } from './cursos-detalle/cursos-detalle.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.guard';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';

const routes: Routes = [
  {path: '',
  component: MenuComponent,

  children: [
  {path: 'cursos', component: ListaCursosComponent},
  {path: 'cursos/:id', component: CursosDetalleComponent},
  {path: 'inscripciones/cursos', component: ListaCursosComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
