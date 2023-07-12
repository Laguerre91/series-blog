import { Component } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-littlelies',
  templateUrl: './littlelies.component.html',
  styleUrls: ['./littlelies.component.css']
})
export class LittleliesComponent {

  public littleLies: Serie;

  constructor() {

    this.littleLies = {
      serie_name: 'Big Little Lies',
      serie_description: 'Based on Liane Moriarty`s bestselling book, this subversive, darkly comedic drama series tells the tale of three mothers of first-graders whose seemingly perfect lives unravel to the point of murder. The stellar cast includes Reese Witherspoon, Nicole Kidman, Shailene Woodley, Alexander Skarsgard, Laura Dern, Adam Scott, Zoe Kravitz, James Tupper and Jeffrey Nordling.',
      serie_year: 2017,
      serie_img: './assets/img/littleLies/littleLies_img.jpeg',
      serie_img1: './assets/img/littleLies/littleLies_img1.webp',
      platform: 'HBO',
      genre: 'Drama',
      recomended: false
    }
  }

}
