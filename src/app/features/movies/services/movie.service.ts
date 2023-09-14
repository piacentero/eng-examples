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

  getMovie(id: string): Observable<IMovie> {
    return this._httpClient.get<IMovie>(`https://641711077107365a7ca3bce3.mockapi.io/movies/${id}`);
  }

  createMovie(movie: Partial<IMovie>): Observable<IMovie> {
    return this._httpClient.post<IMovie>(`https://641711077107365a7ca3bce3.mockapi.io/movies`, movie);
  }

  updateMovie(movie: IMovie): Observable<IMovie> {
    return this._httpClient.put<IMovie>(`https://641711077107365a7ca3bce3.mockapi.io/movies/${movie.id}`, movie);
  }

}
