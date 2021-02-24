import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipService {

  url = environment.clipsUrl;

  constructor(private http: HttpClient) { }

  getClips() {
    return this.http.get(this.url).pipe()
  }
}
