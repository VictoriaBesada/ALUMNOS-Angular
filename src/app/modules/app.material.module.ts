import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule,
  ]
})
export class AppMaterialModule { }
