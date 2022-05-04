import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AyudaComponent } from "./core/components/ayuda/ayuda.component";
import { PageNotFoundComponent } from "./core/components/page-not-found/page-not-found.component";
import { LoginComponent } from "./core/components/autenticacion/login/login.component";
import { AuthGuard } from "./core/guards/auth-guard.guard";


const routes : Routes = [
    {path : '', component: LoginComponent, canActivate: [AuthGuard] },
    {path : 'login', component: LoginComponent},
    {path : 'ayuda', component: AyudaComponent},
    {path: '**', component: PageNotFoundComponent},
    {path:'home', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
    {path:'alumnos', loadChildren: () => import('./featured/alumnos-folder/alumnos.module').then(m => m.AlumnosModule)},
    {path:'cursos', loadChildren: () => import('./featured/cursos-folder/cursos.module').then(m => m.CursosModule)},
    {path:'inscripciones', loadChildren: () => import('./featured/inscripciones-folder/inscripciones.module').then(m => m.InscripcionesModule)}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule{}

