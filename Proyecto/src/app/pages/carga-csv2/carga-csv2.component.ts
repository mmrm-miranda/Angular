import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-csv2',
  standalone: false,
  templateUrl: './carga-csv2.component.html',
  styleUrl: './carga-csv2.component.css'
})
export class CargaCSV2Component {
  columnNames: String[] = [];
  rows: String[][] = [];
  tiposUnicos: String[] = [];

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const text = reader.result as string;
        const lines = text.split('\n').map(line => line.trim()).filter(line => line);
        this.columnNames = lines[0].split(',').map(col => col.trim());
        this.rows = lines.splice(1).map(line => line.split(',').map(cell => cell.trim()));
        const tipo = this.rows.map(row => row[2]);
        this.tiposUnicos = [...new Set(tipo)];
      };

      reader.readAsText(file);
    }
  }

}
