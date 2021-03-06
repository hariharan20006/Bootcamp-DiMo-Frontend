import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../movie-component/movie-component.interface';
import { HttpParams } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {
  @Input() sectionDetails: [Imovie];
  @Input() sectionTitle;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getMoviesForSection(this.sectionTitle);
  }

  async getMoviesForSection(sectionTitle: String) {
    function detectMob() {
      const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];
  
      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
      });
  }

  let pageSize = 5;

  if(detectMob()){
    pageSize = 4;
  }

    let params = new HttpParams();
    await this.httpService
      .Get<[Imovie]>(`/api/movies/?genres.name=${sectionTitle}&pageSize=${pageSize}`)
      .subscribe(data => {
        this.sectionDetails = data;
      });
  }
}
