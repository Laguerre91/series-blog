import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-ozark',
  templateUrl: './ozark.component.html',
  styleUrls: ['./ozark.component.css']
})
export class OzarkComponent {

  public ozark: Serie

  constructor() {

    this.ozark = {
      serie_name: 'Ozark',
      serie_description: 'A financier moves his family to the Ozarks. After a money laundering scheme goes wrong, he is forced to repay a debt to a Mexican drug lord to keep his family safe.',
      serie_year: 2017,
      serie_img: './assets/img/ozark_img.jpeg',
      serie_img1: './assets/img/ozark_img1.jpeg',
      platform: 'Netflix',
      genre: 'Drama',
      recomended: false
    }
  }

}

