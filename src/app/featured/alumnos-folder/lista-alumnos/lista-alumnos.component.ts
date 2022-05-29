import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { RandomApiService } from 'src/app/shared/services/api.service';
import { Estudiantes } from 'src/app/core/models/alumno';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})

export class ListaAlumnosComponent implements OnInit, OnDestroy {

  private subs = new Subscription();
  sesionActiva!: any;

  displayedColumns: string[] = ['accion', 'imagen', 'legajo', 'nombre', 'apellido', 'asistencias'];
  public dataSource!: MatTableDataSource<Estudiantes>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  private dataArray: any;

  constructor(private financeService: RandomApiService, private _snackBar: MatSnackBar) {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  ngOnInit() {
    this.subs.add(this.financeService.getRandomUsers()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<Estudiantes>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(id: number, telefono: number, direccion: string, correo: string): void {
    this._snackBar.open(
      `Id: ${id} 
    Telefono: ${telefono} 
    Direccion: ${direccion} 
    Email: ${correo} `,
      'Cerrar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}