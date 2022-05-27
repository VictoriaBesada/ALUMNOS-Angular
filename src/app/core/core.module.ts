import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { AppMaterialModule } from '../shared/app.material.module';
import { AppRoutingModule } from '../app.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { Estudiantes } from './models/alumno';


@NgModule({
  declarations: [
    LoginComponent,
    AyudaComponent, 
    PageNotFoundComponent,
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    BrowserModule,
    AppMaterialModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    AyudaComponent, 
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
