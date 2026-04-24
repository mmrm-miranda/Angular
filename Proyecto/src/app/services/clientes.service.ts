import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomersResult } from '../interfaces/customers';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }
  
  getCustomer() {
    return this.http.get<CustomersResult>(`http://localhost/desWeb/consultaCustumer.php`);
  }

  guardaUsuario(usuario: any) {
    return this.http.post('http://localhost/desWeb/altaUsuario.php',JSON.stringify(usuario));
  }
}
