import { Component, inject, OnInit } from '@angular/core';
import { BasketService } from '../../services/basket.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../product/product';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { MatButtonModule } from '@angular/material/button';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ProductComponent, CommonModule, MatButtonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',
})
export class CatalogComponent implements OnInit {
  private productService = inject(ProductService);
  private basketService = inject(BasketService);

  get total(): number {
    return this.basketService.getTotal();
  }

  get products(): Product[] {
    return this.productService.getProducts();
  }

  ngOnInit() {
    this.productService.initProducts().subscribe();
    this.basketService.getBasket().subscribe();
  }

  decrementerStock(product: Product) {
    this.basketService
      .addToBaket(product)
      .subscribe(() => this.productService.decreaseProduct(product.id));
  }

  reinitialiser() {
    this.productService
      .reinitialiser()
      .pipe(
        switchMap(() => this.productService.initProducts()),
        switchMap(() => this.basketService.getBasket())
      )
      .subscribe();
  }
}
