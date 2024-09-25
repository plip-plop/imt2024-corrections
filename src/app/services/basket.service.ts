import { Injectable } from '@angular/core';
import { Product } from '../components/product/product';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _basket: Product[] = [];

  constructor() {}

  getBasket() {
    return this._basket;
  }

  addToBaket(product: Product) {
    this._basket.push(product);
  }

  getTotal() {
    return this._basket.reduce((prev, current) => (prev += current.price), 0);
  }
}
