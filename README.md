# Installation d'Angular Material

```
ng add @angular/material
ng generate @angular/material:navigation menu
```

":host" permet de sélectionner le composant lui-même. Dans le cas de "app-product", cela permet d'appliquer du style sur les balises "app-product" (inaccessibles autrement).

```
<app-product>
    // contenu du composant
</ app-product>
```

# Pipes

Avant toute chose, il est nécessaire d'enregistrer la locale souhaitée.

```
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);
```

Ensuite, se référer à la documentation officielle pour les différents formats d'affichage du pipe.
https://angular.dev/api/common/CurrencyPipe

```
 {{ product.price | currency : "EUR" : "symbol" : "" : "fr" }}
```

Il est également possible de configurer la locale et le symbole monétaire par défaut avec un injection token (LOCALE_ID et DEFAULT_CURRENCY_CODE).
https://v17.angular.io/api/core/LOCALE_ID

```
import { LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [{provide: LOCALE_ID, useValue: 'en-US' }]
});
```
