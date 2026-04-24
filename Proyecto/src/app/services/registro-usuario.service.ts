import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {
  url=	'http://localhost/desWeb/registroUsuario.php';
  constructor(private http:HttpClient) {}
  altaUsuario(usuario: any) {
    return this.http.post(this.url,usuario);
}
}

