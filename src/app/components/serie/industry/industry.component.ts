import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent {
  public industry: Serie;

  constructor() {
    this.industry = {
      serie_name: 'Industry',
      serie_year: 2020,
      serie_description: 'An ambitious group of young people strive to climb to the top of London´s financial world. However, conflicts among colleagues, friendship, love, and enemies will arise as soon as they take their first steps.',
      serie_img: './assets/img/indus_img.jpeg',
      serie_img1: './assets/img/indus_img1.jpeg',
      platform: 'HBO',
      genre: 'drama',
      recomended: true
    }
  }
}
