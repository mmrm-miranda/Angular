import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerificarResult } from '../interfaces/verificar';

@Injectable({
  providedIn: 'root' // Hace que este servicio esté disponible en toda la aplicación
})
export class VerificarService {
  // URL del backend donde se verifica al usuario
  private apiUrl = 'http://localhost/desWeb/verificarusuario.php';

  constructor(private http: HttpClient) {}

  // Método para enviar las credenciales al backend y obtener la respuesta
  verificarUsuario(email: string, password: string): Observable<VerificarResult> {
    const body = { email, password }; // Cuerpo de la solicitud
    return this.http.post<VerificarResult>(this.apiUrl, body); // Realiza la solicitud POST
  }
}
