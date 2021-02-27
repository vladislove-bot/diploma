import { NewsService } from './../shared/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.service.getNews(0)
    .subscribe((res: any) => {
      this.articles = res;
    });
  }

}
