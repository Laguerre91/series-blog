import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private seriesUrl = 'components/data.json'

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any[]> {
    return this.http.get<any[]>(this.seriesUrl);
  }
}
