import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ABMDeAlumnosComponent } from "./featured/abm-de-alumnos/abm-de-alumnos.component";
import { AyudaComponent } from "./core/components/ayuda/ayuda.component";
import { ListaAlumnosComponent } from "./featured/lista-alumnos/lista-alumnos.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { ListaCursosComponent } from "./featured/cursos-folder/cursos-lista/cursos-observables.component";
import { CursosModule } from "./featured/cursos-folder/cursos.module";

const routes : Routes = [
    {path : 'alumnos', component: ListaAlumnosComponent},
    {path: 'cursos', component: ListaCursosComponent},    
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
