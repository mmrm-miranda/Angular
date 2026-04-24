import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClimaResult } from '../interfaces/clima';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http: HttpClient) { }
  
  
  getClima(cit: string) {
    return this.http.get<ClimaResult>(`https://api.weatherstack.com/current?access_key=${environment.weatherStackApiKey}&query=${cit}`);
  }
}