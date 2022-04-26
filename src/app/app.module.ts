import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ABMDeAlumnosComponent } from './featured/abm-de-alumnos/abm-de-alumnos.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { ListaAlumnosComponent } from './featured/lista-alumnos/lista-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './core/app.material.module';
import { CursosComponent } from './featured/cursos/cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './shared/directives/titleSize.directive';
import { CursosObservablesComponent } from './featured/cursos-observables/cursos-observables.component';
import { CursosDialogComponent } from './featured/cursos-dialog/cursos-dialog.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AyudaComponent } from './core/components/ayuda/ayuda.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AutenticacionModule } from './core/components/autenticacion/autenticacion.module';
import { CursosModule } from './featured/cursos.module';


@NgModule({

  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ABMDeAlumnosComponent,
    ListaAlumnosComponent,
    CursosComponent,
    TitleSizeDirective,
    CursosObservablesComponent,
    CursosDialogComponent,
    PageNotFoundComponent,
    AyudaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AutenticacionModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
