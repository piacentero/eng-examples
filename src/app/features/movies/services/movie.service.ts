import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../models/interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  getMovies(): Observable<IMovie[]> {
    return this._httpClient.get<IMovie[]>('https://641711077107365a7ca3bce3.mockapi.io/movies');
  }

}