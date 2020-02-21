import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from './movie-component.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent implements OnInit {
  @Input() movieDetails: Imovie;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  openMovieDetails(movieId: String) {
    this.router.navigate([`/movie-details/${movieId}`]);
  }
}
