import { inject, Injectable } from '@angular/core';
import { Product } from '../components/product/product';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  _products: Product[] = [];

  private readonly http = inject(HttpClient);

  getProducts(): Product[] {
    return this._products;
  }

  getProduct(idProduct: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:8080/api/products/${idProduct}`
    );
  }

  decreaseProduct(idProduct: number) {
    const produitRecherche = this._products.find(({ id }) => id === idProduct);
    if (produitRecherche?.stock) {
      produitRecherche.stock--;
    }
  }

  initProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('http://localhost:8080/api/products')
      .pipe(tap((products) => (this._products = products)));
  }

  reinitialiser(): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8080/reset');
  }
}
