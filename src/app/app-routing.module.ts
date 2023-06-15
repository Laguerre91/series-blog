import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { DramaComponent } from './drama/drama.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recomended', component: SeriesComponent },
  { path: 'drama', component: DramaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
