import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/autenticacion/login/login.component";
import { ListaAlumnosComponent } from "../featured/alumnos-folder/lista-alumnos/lista-alumnos.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: ListaAlumnosComponent,

      children: [
          {path: '', component: ListaAlumnosComponent},
          {path: 'cursos', loadChildren: () => import('../featured/cursos-folder/cursos.module').then(m => m.CursosModule)},
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
