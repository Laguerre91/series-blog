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
import { RandomComponent } from './random/random.component';
import { CrazyComponent } from './components/serie/crazy/crazy.component';
import { SwarmComponent } from './components/serie/swarm/swarm.component';
import { LittleliesComponent } from './components/serie/littlelies/littlelies.component';
import { KimmyComponent } from './components/serie/kimmy/kimmy.component';
import { FleaComponent } from './components/serie/flea/flea.component';
import { SinnerComponent } from './components/serie/sinner/sinner.component';
import { BetterComponent } from './components/serie/better/better.component';
import { PleaseComponent } from './components/serie/please/please.component';




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
    OzarkComponent,
    RandomComponent,
    CrazyComponent,
    SwarmComponent,
    LittleliesComponent,
    KimmyComponent,
    FleaComponent,
    SinnerComponent,
    BetterComponent,
    PleaseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
