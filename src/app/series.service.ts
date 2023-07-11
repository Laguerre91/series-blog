import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  getLinkForRandomName(name: string): string {
    const seriesMap: { [key: string]: string } = {
      'Ozark': '/ozark',
      'Raised by Wolves': '/raised',
      'Industry': '/industry',
      'Succession': '/succession',
      'Unbreakable Kimmy Schmidt': '/kimmy',
      'Crazy Ex Girlfriend': '/crazy',
      'Big Little Lies': '/lies',
      'Swarm': '/swarm'
    };

    if (name in seriesMap) {
      return seriesMap[name];
    }

    return 'Error';
  }
}
