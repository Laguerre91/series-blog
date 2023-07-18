import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { RandomComponent } from './random/random.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recomended', component: SeriesComponent },
  { path: 'random', component: RandomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
