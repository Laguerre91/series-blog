import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  randomSerie: any;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void { }

  chooseRandom(): void {
    this.seriesService.getSeries().subscribe(series => {
      const randomIndex = Math.floor(Math.random() * series.length);
      this.randomSerie = series[randomIndex]
    })
  }

}
