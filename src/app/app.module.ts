import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeriesComponent } from './series/series.component';
import { SerieComponent } from './components/serie/serie.component';
import { SuccessionComponent } from './components/serie/succession/succession.component';
import { IndustryComponent } from './components/serie/industry/industry.component';
import { DramaComponent } from './drama/drama.component';
import { RaisedComponent } from './components/serie/raised/raised.component';
import { OzarkComponent } from './components/serie/ozark/ozark.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SeriesComponent,
    SerieComponent,
    SuccessionComponent,
    IndustryComponent,
    DramaComponent,
    RaisedComponent,
    OzarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
