import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from "@angular/material/sidenav";



@NgModule({
  exports: [
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule, 
    MatInputModule, 
    MatSelectModule, 
    MatFormFieldModule, 
    MatDialogModule, 
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ]
})

export class AppMaterialModule { }
