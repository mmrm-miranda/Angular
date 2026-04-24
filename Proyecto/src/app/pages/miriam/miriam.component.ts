import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserResult } from '../../interfaces/users';

@Component({
  selector: 'app-miriam',
  standalone: false,
  templateUrl: './miriam.component.html',
  styleUrl: './miriam.component.css'
})
export class MiriamComponent implements OnInit{
  
  
  mail: string="";
  pas: string="";
  holi: string="";
  ngOnInit(): void {

    console.log(history.state.mail)
    this.mail= history.state.mail || 'aghhh';
    this.pas= history.state.pas || 'hyj';
    this.holi= 'User- ' + this.mail + ' Contraseña- ' + this.pas;

    this.service.getUsers().subscribe((result: UserResult) => {
      this.users = result;
    });
  
  }

  users!: UserResult;

  constructor(private service: UserService){}

  
}

