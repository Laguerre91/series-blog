import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    series: any[] | undefined;

    constructor(private seriesService: SeriesService) { }

    ngOnInit(): void {
        this.seriesService.getSeries().subscribe(series => {
            this.series = series
        })
    }

}
