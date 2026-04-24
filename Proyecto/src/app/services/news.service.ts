import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleResult } from '../interfaces/news';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  
  getUsers(cat: string) {
    return this.http.get<ArticleResult>(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${environment.newsApiKey}`);
  }
}
