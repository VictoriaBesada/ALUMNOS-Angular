import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { AppMaterialModule } from '../shared/app.material.module';
import { AppRoutingModule } from '../app.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    ToolbarComponent,
    LoginComponent,
    AyudaComponent, 
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    ToolbarComponent,
    LoginComponent,
    AyudaComponent, 
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
