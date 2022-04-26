import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ABMDeAlumnosComponent } from "./featured/abm-de-alumnos/abm-de-alumnos.component";
import { AyudaComponent } from "./core/components/ayuda/ayuda.component";
import { CursosObservablesComponent } from "./featured/cursos-observables/cursos-observables.component";
import { ListaAlumnosComponent } from "./featured/lista-alumnos/lista-alumnos.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";

const routes : Routes = [
    {path : 'alumnos', component: ListaAlumnosComponent},
    {path : 'cursos', component: CursosObservablesComponent},
    {path : 'inscripciones', component: ABMDeAlumnosComponent},
    {path : 'ayuda', component: AyudaComponent},
    {path: '', redirectTo: 'alumnos', pathMatch:'full'},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
