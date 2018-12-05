import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { SketchAreaComponent } from './main-container/sketch-area/sketch-area.component';
import { NumberPadComponent } from './main-container/number-pad/number-pad.component';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    SketchAreaComponent,
    NumberPadComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
