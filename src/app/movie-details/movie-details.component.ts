import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Imovie } from '../movie-component/movie-component.interface';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  public movieDetails;
  constructor(  
    private route: ActivatedRoute, private httpService: HttpService) {}

   ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
     this.httpService
      .Get<[Imovie]>(`/api/movies/${id}`)
      .subscribe(data => {
        this.movieDetails = data;
      });
  }

}
