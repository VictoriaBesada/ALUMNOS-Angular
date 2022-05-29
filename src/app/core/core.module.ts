import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { AppMaterialModule } from '../shared/app.material.module';
import { AppRoutingModule } from '../app.routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    LoginComponent,
    PageNotFoundComponent,
    MenuComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule,
    BrowserModule,
    AppMaterialModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  exports: [
    LoginComponent,
    PageNotFoundComponent,
    MenuComponent
  ]
})
export class CoreModule { }
