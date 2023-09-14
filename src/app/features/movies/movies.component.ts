import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieService } from './services/movie.service';
import { Observable } from 'rxjs';
import { IMovie } from './models/interfaces/movie.interface';
import { ITableAction, ITableColumn } from '../../shared/components/table/table.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ecf-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  @ViewChild('runningTimeTemplate', { static: true }) runningTimeTemplate: TemplateRef<HTMLElement>;

  movies$: Observable<IMovie[]>;

  actions: ITableAction<IMovie>[] = [];
  columns: ITableColumn<IMovie>[] = [];

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.movies$ = this._movieService.getMovies();

    this.actions = [
      { icon: 'bi-pencil', click: ({ id }: IMovie) => this._edit(id) }
    ];
    this.columns = [
      { label: 'Name', propertyName: 'name' },
      { label: 'Director', propertyName: 'director' },
      { label: 'Genre', propertyName: 'genre' },
      { label: 'Release date', propertyName: 'releaseDate', type: 'date' },
      { label: 'Time', propertyName: 'runningTime', templateRef: this.runningTimeTemplate }
    ];
  }

  private _edit(id: string): void {
    // this._router.navigate(['movies', 'edit', id]);
    this._router.navigate(['edit', id], { relativeTo: this._activatedRoute });
  }

}
