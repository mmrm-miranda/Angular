import { Component, OnInit } from '@angular/core'; 
import { ClientesService } from '../../services/clientes.service'; 
import { CustomersResult } from '../../interfaces/customers';

@Component({
  selector: 'app-comunicacion',
  standalone: false,
  templateUrl: './comunicacion.component.html',
  styleUrl: './comunicacion.component.css'
})
export class ComunicacionComponent implements  OnInit { 
    customer!: CustomersResult;
 
   constructor(private service: ClientesService){}

   ngOnInit(): void {
     this.cargarClientes();
   }

   cargarClientes() {
    this.service.getCustomer().subscribe((result: CustomersResult) => {
          this.customer = result;
          console.log(this.customer);
        });
    }
}
