import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Serie } from 'src/app/interfaces/serie';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    providers: [SeriesService]
})
export class CardComponent implements OnInit {

    series: Serie[];

    constructor(private seriesService: SeriesService) {
        this.series = []
    }

    ngOnInit(): void {
        this.seriesService.getSeries()
            .subscribe((data) => {
                this.series = data
            },
                (err) => {
                    console.log(err)
                }
            )
    }


}


