import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-crazy',
  templateUrl: './crazy.component.html',
  styleUrls: ['./crazy.component.css']
})
export class CrazyComponent {

  public crazy: Serie;

  constructor() {
    this.crazy = {
      serie_name: 'Crazy Ex Girlfriend',
      serie_description: 'The series tells the story of Rebecca Nora Bunch, a successful and young lawyer who resides in Manhattan and impulsively seeks love. After experiencing a nervous breakdown, she leaves New York to move to West Covina, California. There, she seeks to get back together with her ex-boyfriend Josh, with whom she was at a summer camp.',
      serie_year: 2015,
      serie_img: './assets/img/crazy/crazy_img.jpg',
      serie_img1: './assets/img/crazy/crazy_img1.jpeg',
      platform: 'Netflix',
      genre: 'Comedy',
      recomended: false
    }
  }
}
