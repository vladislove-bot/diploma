import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = environment.newsUrl;

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url).pipe()
  }
}
