import { Component } from '@angular/core';
import { Random } from '../models/random';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {

  public randoms: Array<Random>;
  public randomName: string = ''

  constructor() {
    this.randoms = [
      new Random('Raised by Wolves', 'Amazon Prime', 'Drama', false),

      new Random('Succession', 'HBO', 'drama', true),

      new Random('Industry', 'HBO', 'drama', true),

      new Random('Ozark', 'Netflix', 'Drama', true),

      new Random('Unbreakable Kimmy Schmidt', 'Netflix', 'comedy', false),

      new Random('Crazy Ex Girlfriend', 'Netflix', 'comedy', false),

      new Random('Big Little Lies', 'HBO', 'drama', true),

      new Random('Swarm', 'Amazon Prime', 'Drama', false)
    ]
  }

  onRandomize() {
    let randomSerie = this.randoms[Math.floor(Math.random() * this.randoms.length)];

    this.randomName = randomSerie.name;
  };

  getLinkForRandomName(name: string): string {
    if (name === 'Ozark') {
      return '/ozark';
    } else if (name === 'Raised by Wolves') {
      return '/raised';
    } else if (name === 'Industry') {
      return '/industry'
    } else if (name === 'Succession') {
      return '/succession'
    } else if (name === 'Unbreakable Kimmy Schmidt') {
      return '/kimmy'
    } else if (name === 'Crazy Ex Girlfriend') {
      return '/crazy'
    } else if (name === 'Big Little Lies') {
      return '/lies'
    } else if (name === 'Swarm') {
      return '/swarm'
    }
    return 'Error';
  }
}
