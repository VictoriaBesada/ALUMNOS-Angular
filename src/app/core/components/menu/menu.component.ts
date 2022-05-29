import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {


  ngOnInit(): void {
  }

  sesionActiva!: any;

  constructor(
    private auth: AutenticacionService,
    private router: Router,
  ) {
    this.sesionActiva = JSON.parse(localStorage.getItem('sesion') || '{}');
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);

  }

}
