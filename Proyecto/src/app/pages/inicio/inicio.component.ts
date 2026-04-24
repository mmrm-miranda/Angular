import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  email: string = ''; // Almacena el email ingresado por el usuario
  password: string = ''; // Almacena la contraseña ingresada por el usuario
  mensaje: string = ''; // Almacena mensajes de error o éxito

  constructor(private http: HttpClient, private router: Router) {}

  // Método para manejar el inicio de sesión
  iniciarSesion() {
    const datos = { email: this.email, password: this.password }; // Datos del formulario
    this.http.post('http://localhost/desWeb/verificarusuario.php', datos).subscribe(
      (response: any) => {
        if (response.success) {
          this.router.navigate(['/home']); // Redirige al componente home si las credenciales son válidas
        } else {
          this.mensaje = response.message; // Muestra el mensaje de error
        }
      },
      (error) => {
        console.error('Error en la solicitud:', error); // Maneja errores de comunicación
        this.mensaje = 'Error en la comunicación con el servidor';
      }
    );
  }
}