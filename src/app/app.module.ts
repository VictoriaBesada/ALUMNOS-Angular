import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './shared/directives/titleSize.directive';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Cursos } from './featured/cursos-folder/cursos-component/cursos-component.component';
import { AutenticacionService } from './shared/services/autenticacion.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './core/components/menu/menu.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { CoreRoutingModule } from './core/core-routing.module';
import { CursosRoutingModule } from './featured/cursos-folder/cursos-routing.module';
import { AlumnosRoutingModule } from './featured/alumnos-folder/alumnos-routing.module';
import { InscripcionesRoutingModule } from './featured/inscripciones-folder/inscripciones-routing.module';
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './featured/alumnos-folder/alumnos.module';
import { CursosModule } from './featured/cursos-folder/cursos.module';
import { InscripcionesModule } from './featured/inscripciones-folder/inscripciones.module';

@NgModule({

  declarations: [
    AppComponent,
    TitleSizeDirective,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CoreModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreRoutingModule,
    CursosRoutingModule,
    AlumnosRoutingModule,
    InscripcionesRoutingModule,
  ],
  providers: [ AutenticacionService],
  bootstrap: [AppComponent]

})

export class AppModule { }
