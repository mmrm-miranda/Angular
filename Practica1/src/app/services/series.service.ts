import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesResult } from '../../interfaces/series';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(private http: HttpClient) {}
  getSeries(nombre: string) {
    return this.http.get<SeriesResult>(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${environment.omdbApiKey}&t=`+nombre+'&type=series'
    );
  }
}
