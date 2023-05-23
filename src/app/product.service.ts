import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  addCart(data: any) {
    return this.http.post('http://localhost:3000/cart', data);
  }
  getCart() {
    return this.http.get<any>('http://localhost:3000/cart');
  }

  deleteCart(id: any) {
    return this.http.delete('http://localhost:3000/cart/' + id);
  }

  updateCart(data: any) {
    return this.http.put(`http://localhost:3000/cart/${data.id}`, data);
  }

  public sub = new Subject<any>();

  getInput(data: any) {
    this.sub.next(data);
  }
}
