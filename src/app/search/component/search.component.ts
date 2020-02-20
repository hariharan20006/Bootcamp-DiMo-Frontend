import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search.component.css',
  ]
})
export class SearchComponent implements OnInit {
  url = '/api/movies?original_title=';

  options = [];
  control: FormControl;

  moviesSubscription$: Subscription;
  constructor(private httpService: HttpService) {
    this.control = new FormControl('');
    // this.subscribeToMovies();
  }

  onKeyUp(e) {
    // TODO: use debounce

    if (this.control.value && this.control.value.length < 3) {
      return;
    }

    this.httpService.Get<any>(this.url + this.control.value).subscribe(data => {
      this.options = data.map(movie => {
        return {
          id: movie.id,
          label: movie.originalTitle,
          posterUrl: movie.posterUrl
        };
      });
    });
  }

  ngOnInit(): void {}
}




