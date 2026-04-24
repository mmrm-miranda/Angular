export interface CustomersResult {
  Clientes: Cliente[];
}

export interface Cliente {
  Nombre: string;
  Direccion: string;
  Ciudad: string;
  Pais: string;
}