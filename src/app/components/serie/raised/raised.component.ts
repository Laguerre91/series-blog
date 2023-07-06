import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-raised',
  templateUrl: './raised.component.html',
  styleUrls: ['./raised.component.css']
})
export class RaisedComponent {

  public raised: Serie

  constructor() {

    this.raised = {
      serie_name: 'Raised by Wolves',
      serie_description: 'Two androids have the important task of raising human children on a mysterious virgin planet. When the human colony begins to tear apart due to religious differences, the androids learn that humanity´s beliefs are treacherous.',
      serie_year: 2020,
      serie_img: './assets/img/raised/raised_img.jpeg',
      serie_img1: './assets/img/raised/raised_img1.jpeg',
      platform: 'Amazon Prime',
      genre: 'Drama',
      recomended: false
    }
  }

}
