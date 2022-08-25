import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class RestService {
   baseUrl: string = 'https://api.punkapi.com/v2/beers?page=1';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<User[]>(this.baseUrl);
  }
}
