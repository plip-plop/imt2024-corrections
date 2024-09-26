import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommandeFormulaire } from './commande-formulaire';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss',
})
export class BasketComponent {
  private readonly http = inject(HttpClient);

  commander(commande: CommandeFormulaire) {
    this.http
      .post<{ orderNumber: number }>(
        'http://localhost:8080/api/basket/checkout',
        commande
      )
      .subscribe({
        next: ({ orderNumber }) =>
          console.log(`La commande N°${orderNumber} a bien été envoyée !`),
        error: () => console.log(`Une erreur s'est produite lors de l'envoi`),
      });
  }
}
