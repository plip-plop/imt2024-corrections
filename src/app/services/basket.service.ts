import { inject, Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private _basket: Product[] = [];
  private readonly http = inject(HttpClient);

  getBasket(): Observable<Product[]> {
    return this.http
      .get<Product[]>('http://localhost:8080/api/basket')
      .pipe(tap((products) => (this._basket = products)));
  }

  addToBaket(product: Product): Observable<Product> {
    return this.http
      .post<Product>('http://localhost:8080/api/basket', {
        productId: product.id,
      })
      .pipe(tap((produit) => this._basket.push(produit)));
  }

  getTotal(): number {
    if (this._basket.length) {
      return this._basket.reduce((prev, current) => (prev += current.price), 0);
    } else {
      return 0;
    }
  }
}
