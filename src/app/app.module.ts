import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './shared/directives/titleSize.directive';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CursosModule } from './featured/cursos-folder/cursos.module';
import { Cursos } from './featured/cursos-folder/cursos-component/cursos-component.component';
import { AlumnosDetalleComponent } from './featured/alumnos-folder/alumnos-detalle/alumnos-detalle.component';
import { AutenticacionService } from './shared/services/autenticacion.service';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { AlumnosModule } from './featured/alumnos-folder/alumnos.module';
import { InscripcionesModule } from './featured/inscripciones-folder/inscripciones.module'

@NgModule({

  declarations: [
    AppComponent,
    TitleSizeDirective,
    Cursos,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule,
    AlumnosModule,
    InscripcionesModule,
    CoreModule

  ],
  providers: [ AutenticacionService],
  bootstrap: [AppComponent]

})

export class AppModule { }
