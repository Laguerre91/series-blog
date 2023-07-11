import { Component } from '@angular/core';
import { Random } from '../models/random';
import { SeriesService } from '../series.service';
import { Serie } from '../models/serie.model';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {

  public randoms: Array<Random>;
  public randomName: string = ''

  constructor(private seriesService: SeriesService) {
    this.randoms = [
      new Random('Raised by Wolves', 'Amazon Prime', 'Drama', false, ''),

      new Random('Succession', 'HBO', 'drama', true, ''),

      new Random('Industry', 'HBO', 'drama', true, ''),

      new Random('Ozark', 'Netflix', 'Drama', true, ''),

      new Random('Unbreakable Kimmy Schmidt', 'Netflix', 'comedy', false, ''),

      new Random('Crazy Ex Girlfriend', 'Netflix', 'comedy', false, ''),

      new Random('Big Little Lies', 'HBO', 'drama', true, ''),

      new Random('Swarm', 'Amazon Prime', 'Drama', false, '')
    ]
  }

  onRandomize() {
    let randomSerie = this.randoms[Math.floor(Math.random() * this.randoms.length)];

    this.randomName = randomSerie.name;
  };

  getLink(nombreSerie: string): string {
    return this.seriesService.getLinkForRandomName(nombreSerie);
  }

}
