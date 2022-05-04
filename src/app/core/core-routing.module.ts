import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaAlumnosComponent } from "../featured/alumnos-folder/lista-alumnos/lista-alumnos.component";

const routes: Routes = [
  {path: '', component: ListaAlumnosComponent}
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
