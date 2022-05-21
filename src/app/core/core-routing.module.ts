import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaAlumnosComponent } from "../featured/alumnos-folder/lista-alumnos/lista-alumnos.component";
import { LoginComponent } from "./components/autenticacion/login/login.component";
import { AyudaComponent } from "./components/ayuda/ayuda.component";
import { MenuComponent } from "./components/menu/menu.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'home',
        component: ListaAlumnosComponent,
      },
      {
        path: 'ayuda',
        component: AyudaComponent,
      }
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
