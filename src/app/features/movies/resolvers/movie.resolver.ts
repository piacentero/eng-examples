import { ResolveFn } from '@angular/router';
import { IMovie } from '../models/interfaces/movie.interface';
import { MovieService } from '../services/movie.service';
import { inject } from '@angular/core';

export const movieResolver: ResolveFn<IMovie> = (route, state) => {
  const movieService: MovieService = inject(MovieService);

  return movieService.getMovie(route.paramMap.get('id'));
};
