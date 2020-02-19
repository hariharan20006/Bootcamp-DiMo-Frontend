import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from './movie-component.interface';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  @Input() movieDetails: Imovie;

  constructor() {}

  ngOnInit(): void {
    console.log(this.movieDetails);
  }
}
