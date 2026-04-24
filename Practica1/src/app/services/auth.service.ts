import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = environment.spotifyClientId;
  private clientSecret = environment.spotifyClientSecret;
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(this.clientId + ':' + this.clientSecret)
    });

    const body = 'grant_type=client_credentials';

    return this.http.post(this.tokenUrl, body, { headers });
  }
}
