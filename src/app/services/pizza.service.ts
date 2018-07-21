import { Injectable } from '@angular/core';
import { Pizza } from '../shared/pizza';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }
  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(baseURL + 'dishes');
  }
}
