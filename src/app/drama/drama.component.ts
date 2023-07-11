import { Component } from '@angular/core';
import { CardService } from '../services/card.service';
import { Random } from '../models/random';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css'],
  providers: [CardService]
})
export class DramaComponent {
  public cards: Array<Random>;

  constructor(private cardService: CardService) {
    this.cards = this.cardService.getCardsByGenre('drama');
  }

  getLink(nombreSerie: string): string {
    return this.cardService.getLink(nombreSerie);
  }
}

