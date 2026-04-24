import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  texto: string="";
  mail: string="";
  pas: string="";
  ngOnInit(): void{
    this.texto= history.state.dato || 'No hay informacion'
  }
  constructor(private router: Router) {}

  navegarConValor(){
    this.router.navigate(['/me'],{state: {mail: this.mail, pas: this.pas}});  // Pasamos el valor como parámetro
  }
  
}
  

