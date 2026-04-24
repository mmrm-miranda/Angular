import { Component, OnInit } from '@angular/core';
import { ClimaResult } from '../../interfaces/clima';
import { ClimaService } from '../../services/clima.service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cit: string = "seul";


  constructor(private service: ClimaService){}

  ngOnInit(): void {
    this.cargarclima();
  }

  cargarclima() {
    this.service.getClima(this.cit).subscribe((result: ClimaResult) => {
      this.cli = result;
    });
  }
  cli!: ClimaResult;
}