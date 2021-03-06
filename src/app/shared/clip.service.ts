import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipService {

  url = environment.clipsUrl;

  constructor(private http: HttpClient) { }

  getClips(pageSize) {
    return this.http.get(this.url, {
      params: new HttpParams()
        .set('pageSize', pageSize)
    }).pipe()
  }
}
