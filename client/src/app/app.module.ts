import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {MaterialModule} from './material-module';
import PlanetService from './services/planets.service';
import { PopulationPipe } from './pipes/population.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PopulationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    PlanetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
