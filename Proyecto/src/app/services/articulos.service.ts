import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url='http://localhost/desWeb/alta.php';
  constructor(private http: HttpClient) { } 
  alta(articulo:any) { 
  return this.http.post(`${this.url}alta.php`, JSON.stringify(articulo));     
  } 

} 
