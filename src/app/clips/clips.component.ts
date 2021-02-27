import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ClipService } from '../shared/clip.service';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.css']
})
export class ClipsComponent implements OnInit {

  clips = [];

  genres = [
    { name: 'Рэп и хип-хоп' },
    { name: 'Рок' },
    { name: 'Поп' },
    { name: 'Альтернатива' },
    { name: 'Инди' },
  ]

  constructor(private sanitizer: DomSanitizer, private service: ClipService) { }

  ngOnInit(): void {
    this.getClips();
  }

  getClips() {
    this.service.getClips(0)
    .subscribe((res: any) => {
      this.clips = res;
      this.clips.forEach(element => {
        element.url = this.sanitizer.bypassSecurityTrustResourceUrl(element.url)
      })
    })
  }

  getClipsByCategory(genre) {
    return this.clips.filter(value => value.genre == genre);
  }

}
