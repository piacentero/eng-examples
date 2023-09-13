import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Observable } from 'rxjs';
import { IMovie } from './models/interfaces/movie.interface';

@Component({
  selector: 'ecf-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies$: Observable<IMovie[]>;

  constructor(
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movies$ = this._movieService.getMovies();
  }

}
