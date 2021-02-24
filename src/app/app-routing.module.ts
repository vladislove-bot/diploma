import { NewsComponent } from './news/news.component';
import { ClipsComponent } from './clips/clips.component';
import { MusicComponent } from './music/music.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'music', component: MusicComponent },
  { path: 'clips', component: ClipsComponent },
  { path: 'news', component: NewsComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
