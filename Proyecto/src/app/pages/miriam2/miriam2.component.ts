import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserResult } from '../../interfaces/users';

@Component({
  selector: 'app-miriam2',
  standalone: false,
  templateUrl: './miriam2.component.html',
  styleUrl: './miriam2.component.css'
})
export class Miriam2Component implements OnInit{
  
  

  ngOnInit(): void {


    this.service.getUsers().subscribe((result: UserResult) => {
      this.users = result;
    });
  
  }

  users!: UserResult;

  constructor(private service: UserService){}

  
}