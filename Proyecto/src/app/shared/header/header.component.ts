import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  irALogin(){
    //this.router.navigate(['/login'], {state: {dato:"Desarrollo de Aplicaciones Web"} });
    this.router.navigate(['/login'], {state: {dato:"<h1>BTS</h1>"} });
  }
}
