import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { DramaComponent } from './drama/drama.component';
import { OzarkComponent } from './components/serie/ozark/ozark.component';
import { SuccessionComponent } from './components/serie/succession/succession.component';
import { RaisedComponent } from './components/serie/raised/raised.component';
import { IndustryComponent } from './components/serie/industry/industry.component';
import { CrazyComponent } from './components/serie/crazy/crazy.component';
import { LittleliesComponent } from './components/serie/littlelies/littlelies.component';
import { SwarmComponent } from './components/serie/swarm/swarm.component';
import { KimmyComponent } from './components/serie/kimmy/kimmy.component';
import { RandomComponent } from './random/random.component';
import { ComedyComponent } from './comedy/comedy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recomended', component: SeriesComponent },
  { path: 'drama', component: DramaComponent },
  { path: 'random', component: RandomComponent },
  { path: 'ozark', component: OzarkComponent },
  { path: 'succession', component: SuccessionComponent },
  { path: 'raised', component: RaisedComponent },
  { path: 'industry', component: IndustryComponent },
  { path: 'crazy', component: CrazyComponent },
  { path: 'lies', component: LittleliesComponent },
  { path: 'swarm', component: SwarmComponent },
  { path: 'kimmy', component: KimmyComponent },
  { path: 'comedy', component: ComedyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
