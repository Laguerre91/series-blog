import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-succession',
  templateUrl: './succession.component.html',
  styleUrls: ['./succession.component.css']
})
export class SuccessionComponent {

  public succession: Serie;

  constructor() {
    this.succession = {
      serie_name: 'Succession',
      serie_year: 2019,
      serie_description: 'The saga of a fictional American family that owns an international media conglomerate, which is not only rich and powerful, but also its members seek power and to run the business their way, despite the established succession plan.',
      serie_img: './assets/img/succession/suc-tom.jpeg',
      serie_img1: './assets/img/succession/suc-1.jpeg',
      platform: 'HBO',
      genre: 'drama',
      recomended: true
    }
  }

}
