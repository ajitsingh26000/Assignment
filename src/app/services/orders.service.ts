import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { baseURL } from '../shared/baseurl';
import { Pizza } from '../shared/pizza';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  order(order) {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    var orderValue = {};
    orderValue[uniqid] = order;
    debugger
    return this.http.post(baseURL +'orders',orderValue);
  }
}
