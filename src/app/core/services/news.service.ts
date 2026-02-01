import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private BASE_URL = 'https://berita-indo-api-next.vercel.app/api';

  constructor(private http: HttpClient) {}

  getLatest(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/cnn/terbaru`);
  }

  getByCategory(category: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/cnn/${category}`);
  }

  getPopular(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/cnn/nasional`);
  }
}

