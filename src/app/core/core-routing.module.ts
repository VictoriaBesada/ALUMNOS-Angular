import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaAlumnosComponent } from "../featured/alumnos-folder/lista-alumnos/lista-alumnos.component";
import { LoginComponent } from "./components/autenticacion/login/login.component";
import { MenuComponent } from "./components/menu/menu.component";
import { AuthGuard } from "./guards/auth-guard.guard";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: ListaAlumnosComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
