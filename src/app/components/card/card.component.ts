import { Component } from '@angular/core';
import { Random } from 'src/app/models/random';
import { CardService } from 'src/app/services/card.service';
import { SeriesService } from 'src/app/series.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CardService]
})
export class CardComponent {

  public cards: Array<Random>;
  public seriesName: string = ''


  constructor(private seriesService: SeriesService) {

    this.seriesName = Random.name;

    this.cards = [

      new Random('Raised by Wolves', 'Amazon Prime', 'Drama', false, './assets/img/raised/raised_img.jpeg'),

      new Random('Succession', 'HBO', 'drama', true, './assets/img/succession/suc-tom.jpeg'),

      new Random('Industry', 'HBO', 'drama', true, './assets/img/industry/indus_img1.jpeg'),

      new Random('Ozark', 'Netflix', 'Drama', true, './assets/img/ozark/ozark_img.jpeg'),

      new Random('Unbreakable Kimmy Schmidt', 'Netflix', 'comedy', false, ''),

      new Random('Crazy Ex Girlfriend', 'Netflix', 'comedy', false, './assets/img/crazy/crazy_img.jpg'),

      new Random('Big Little Lies', 'HBO', 'drama', true, './assets/img/littleLies/littleLies_img.jpeg'),

      new Random('Swarm', 'Amazon Prime', 'Drama', false, '')

    ]
  }


  getLink(nombreSerie: string): string {
    return this.seriesService.getLinkForRandomName(nombreSerie);
  }

}
