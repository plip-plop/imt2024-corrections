import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { MenuComponent } from './menu/menu.component';
import { Product } from './components/product/product';
import { ProductService } from './services/product.service';
import { BasketService } from './services/basket.service';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, MenuComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SanctuaireDuJeu';

  private productService = inject(ProductService);
  private basketService = inject(BasketService);

  get total(): number {
    return this.basketService.getTotal();
  }

  get products(): Product[] {
    return this.productService.getProducts();
  }

  decrementerStock(product: Product) {
    this.productService.decreaseProduct(product.id);
    this.basketService.addToBaket(product);
  }
}
