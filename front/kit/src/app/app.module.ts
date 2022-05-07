import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppService } from "./app.service";
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import { MeropryComponent } from './meropry/meropry.component';
import { TransComponent } from './trans/trans.component';
import { KonkursComponent } from './konkurs/konkurs.component';
import { NewsComponent } from './news/news.component';
import { MpitComponent } from './mpit/mpit.component';
import { LcabComponent } from './lcab/lcab.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeropryComponent,
    TransComponent,
    KonkursComponent,
    NewsComponent,
    MpitComponent,
    LcabComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpClientModule,
    MatExpansionModule,
    MatDatepickerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
