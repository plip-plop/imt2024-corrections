import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ArticleComponent } from './components/article/article.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    title: 'Notre catalogue',
  },
  {
    path: 'products/:id',
    component: ArticleComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
