import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { Random } from '../models/random';

@Component({
  selector: 'app-comedy',
  templateUrl: './comedy.component.html',
  styleUrls: ['./comedy.component.css'],
  providers: [CardService]
})
export class ComedyComponent {

  public cards: Array<Random>;

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCardsByGenre('comedy');
  }

  getLink(nombreSerie: string): string {
    return this.cardService.getLink(nombreSerie);
  }

}
