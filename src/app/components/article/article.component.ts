import { Component, inject } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Product } from '../product/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  product?: Product;
  private activatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);

  ngOnInit() {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
  }
}
