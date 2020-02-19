import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../movie-component/movie-component.interface';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {
  @Input() sectionDetails: [Imovie];
  @Input() sectionTitle;
  constructor() {}

  ngOnInit(): void {
    console.log(this.sectionDetails);
  }
}
