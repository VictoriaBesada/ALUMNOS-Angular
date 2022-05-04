import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { AlumnosDetalleComponent } from './alumnos-detalle/alumnos-detalle.component';
import { AuthGuard } from 'src/app/core/guards/auth-guard.guard';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';
import { LoginComponent } from 'src/app/core/components/autenticacion/login/login.component';

const routes: Routes = [

  {path: '',
  component: MenuComponent,

  children: [
  {path: 'alumnos', component: ListaAlumnosComponent},
  {path: 'alumnos/:id', component: AlumnosDetalleComponent}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
