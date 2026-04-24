import { Component, OnInit } from '@angular/core';
import { ArticleResult } from '../../interfaces/news';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-miriam3',
  standalone: false,
  templateUrl: './miriam3.component.html',
  styleUrl: './miriam3.component.css'
})
export class Miriam3Component implements OnInit{
  articles!: ArticleResult;

  constructor(private service: NewsService){}

  cat: string = "technology";

  opciones = [
    {valor: 'technology', nombre: 'Tecnología'},
    {valor: 'business', nombre: 'Negocios'},
    {valor: 'entertainment', nombre: 'Entretenimiento'},
    {valor: 'general', nombre: 'General'},
    {valor: 'health', nombre: 'Salud'},
    {valor: 'science', nombre: 'Ciencia'},
    {valor: 'sports', nombre: 'Deportes'}

  ];
  

  ngOnInit(): void {


    this.cargarNew();//this.service.getUsers().subscribe((result: ArticleResult) => {
      //this.articles = result;
    //});
  
  }

  cargarNew(){
    this.service.getUsers(this.cat).subscribe((result: ArticleResult) => {
      this.articles = result;
    });

  }

  

  
}