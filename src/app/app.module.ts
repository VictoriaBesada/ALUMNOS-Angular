import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './shared/directives/titleSize.directive';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Cursos } from './featured/cursos-folder/cursos-component/cursos-component.component';
import { AutenticacionService } from './shared/services/autenticacion.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './core/components/menu/menu.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

@NgModule({

  declarations: [
    AppComponent,
    TitleSizeDirective,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ AutenticacionService],
  bootstrap: [AppComponent]

})

export class AppModule { }
