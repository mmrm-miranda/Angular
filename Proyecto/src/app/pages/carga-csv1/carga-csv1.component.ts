import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-csv1',
  standalone: false,
  templateUrl: './carga-csv1.component.html',
  styleUrl: './carga-csv1.component.css'
})
export class CargaCSV1Component {
  colummnNames: string[] = [];
  rows: string[][] = [];
  tiposUnicos: string[] = [];


  onFileSelected(event: Event): void{
    const input= event.target as HTMLInputElement;

    if(input.files?.length){
      const file=input.files[0];
      const reader= new FileReader();
      reader.onload=() =>{
        const text= reader.result as string;
        const lines= text.split('\n').map(line => line.trim()). filter(line => line);
        this.colummnNames= lines[0].split(',').map(col => col.trim());
        this.rows= lines.splice(1).map(line => line.split(',').map(cell => cell.trim()));

        const tipo= this.rows.map(row => row[2]);
        this.tiposUnicos=[...new Set(tipo)];
        


      }

      reader.readAsText(file);
    }

  }
}
