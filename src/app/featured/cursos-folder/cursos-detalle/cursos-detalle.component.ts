import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/models/courses';

@Component({
  selector: 'app-cursos-detalle',
  templateUrl: './cursos-detalle.component.html',
  styleUrls: ['./cursos-detalle.component.css']
})
export class CursosDetalleComponent implements OnInit {

  cursos: Curso[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
