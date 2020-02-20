import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from './movie-component.interface';
import { Router } from '@angular/router';

import {
  ConnectionPositionPair,
  Overlay,
  OverlayRef
} from '@angular/cdk/overlay';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  @Input() movieDetails: Imovie;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.movieDetails);
  }

  openMovieDetails(movieId: string) {
    this.router.navigate([`/movie-details/${movieId}`]);
  }
}
