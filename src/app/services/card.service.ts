import { Injectable } from '@angular/core';
import { Random } from '../models/random';
import { SeriesService } from '../series.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Array<Random>;

  constructor(private seriesService: SeriesService) {
    this.cards = [
      new Random('Raised by Wolves', 'Amazon Prime', 'Drama', true, './assets/img/raised/raised_img.jpeg'),
      new Random('Succession', 'HBO', 'drama', true, './assets/img/succession/suc-tom.jpeg'),
      new Random('Industry', 'HBO', 'drama', true, './assets/img/industry/indus_img1.jpeg'),
      new Random('Ozark', 'Netflix', 'Drama', true, './assets/img/ozark/ozark_img.jpeg'),
      new Random('Unbreakable Kimmy Schmidt', 'Netflix', 'comedy', true, ''),
      new Random('Crazy Ex Girlfriend', 'Netflix', 'comedy', true, './assets/img/crazy/crazy_img.jpg'),
      new Random('Big Little Lies', 'HBO', 'drama', true, './assets/img/littleLies/littleLies_img.jpeg'),
      new Random('Swarm', 'Amazon Prime', 'Drama', true, '')
    ];
  }

  //FUNCTION TO FILTER THE SERIES BY PLATFORM
  getCardsByPlatform(platform: string): Array<Random> {
    return this.cards.filter(card => card.platform.toLowerCase() === platform.toLowerCase());
  }

  //FUNCTION TO FILTER THE SERIES BY GENRE
  getCardsByGenre(genre: string): Array<Random> {
    return this.cards.filter(card => card.genre.toLowerCase() === genre.toLowerCase());
  }

  //FUNCTION TO GET THE ROUTE TO EACH COMPONENT
  getLink(nombreSerie: string): string {
    return this.seriesService.getLinkForRandomName(nombreSerie);
  }
}
