import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getNewOrders(){
    let url = 'http://127.0.0.1:8000/';
    return this.http.get(url)
  };

  getOrder(container:string, no:string, date:string){
    let url = `http://127.0.0.1:8000/display-order/${container}/${no}/${date}`;
    return this.http.get(url)
  }

  getCompletedOrders(){
    let url = 'http://127.0.0.1:8000/completed-orders';
    return this.http.get(url)
  }

  getUpdatedOrders(){
    let url = 'http://127.0.0.1:8000/updated-orders';
    return this.http.get(url)
  }
}