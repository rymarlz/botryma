import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { TradingService } from './trading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatProgressSpinnerModule

  ],
  providers: [
    TradingService,
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
