import { NewsService } from './../shared/news.service';
import { ClipService } from './../shared/clip.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { element } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clips = [];
  articles = [];
  data: any[] = [
    {
        "previewImageSrc": "../../assets/images/preview/1.jpg",
        "alt": "Description for Image 1",
        "title": "Title 1"
    },
    {
      "previewImageSrc": "../../assets/images/preview/2.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
    "previewImageSrc": "../../assets/images/preview/3.jpg",
    "alt": "Description for Image 1",
    "title": "Title 1"
},
  ]

  constructor(private sanitizer: DomSanitizer, private clipsService: ClipService, private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
    this.getClips();
  }

  getClips() {
    this.clipsService.getClips()
    .subscribe((res: any) => {
      this.clips = res;
      this.clips.forEach(element => {
        element.url = this.sanitizer.bypassSecurityTrustResourceUrl(element.url)
      })
    });
  }

  getNews() {
    this.newsService.getNews()
    .subscribe((res: any) => {
      this.articles = res;
    });
  }
}
