import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ABMDeAlumnosComponent } from './components/abm-de-alumnos/abm-de-alumnos.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './modules/app.material.module';
import { CursosComponent } from './components/cursos/cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleSizeDirective } from './directives/titleSize.directive';
import { CursosObservablesComponent } from './components/cursos-observables/cursos-observables.component';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';


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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule { }
