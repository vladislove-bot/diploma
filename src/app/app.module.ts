import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';
import { ClipsComponent } from './clips/clips.component';

import { ClipService } from './shared/clip.service';

import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MusicComponent,
    NewsComponent,
    ClipsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GalleriaModule,
    CarouselModule,
    AppRoutingModule,
  ],
  providers: [ClipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
