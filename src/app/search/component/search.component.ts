import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormControl } from '@angular/forms';
import { Subscription, fromEvent, of } from 'rxjs';
import { Router } from '@angular/router';
import { filter, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  url = '/api/movies?pageSize=10&original_title=';

  @ViewChild('movieSearchInput') movieSearchInput: ElementRef;
  options = [];
  control: FormControl;
  isSearching = false;

  moviesSubscription$: Subscription;
  constructor(private httpService: HttpService, private router: Router) {
    this.control = new FormControl('');
    // this.subscribeToMovies();
  }

  searchMovie(str) {
    if (str === '') {
      return of([]);
    }
    return this.httpService.Get<any>(this.url + str);
  }

  openMovieDetails(movieId: string) {
    this.router.navigate([`/movie-details/${movieId}`]);
  }

  ngAfterViewInit(): void {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater then 2
        filter((res: string) => res.length > 2),
        // Time in milliseconds between key events
        debounceTime(500),
        // If previous query is diffent from current
        distinctUntilChanged()
        // subscription for response
      )
      .subscribe((text: string) => {
        this.isSearching = true;
        this.searchMovie(text).subscribe(data => {
          this.options = data.map(movie => {
            return {
              id: movie.id,
              label: movie.originalTitle,
              posterUrl: movie.posterUrl
            };
          });
          console.log('OPTIONA', this.options);
          this.isSearching = false;
        }),
          // tslint:disable-next-line: no-unused-expression
          (err: any) => {
            this.isSearching = false;
            console.log('error', err);
          };
      });
  }

  ngOnInit(): void {}
}




