import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MovieService } from './services/movie.service';
import { delay, filter, Observable, switchMap, tap } from 'rxjs';
import { IMovie } from './models/interfaces/movie.interface';
import { ITableAction, ITableColumn } from '../../shared/components/table/table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorModalComponent } from '../../core/modals/error-modal/error-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../../shared/modals/confirm-modal/confirm-modal.component';
import { Location } from '@angular/common';

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
    private _router: Router,
    private _modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.movies$ = this._movieService.getMovies();

    this.actions = [
      { icon: 'bi-pencil', click: ({ id }: IMovie) => this._edit(id) },
      { icon: 'bi-trash', click: ({ id, name }: IMovie) => this._delete(id, name) }
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
    this._router.navigate(['movies', 'create-edit', id]);
    // this._router.navigate(['edit', id], { relativeTo: this._activatedRoute });
  }

  private _delete(id: string, name: string): void {
    const modalRef = this._modalService.show(ConfirmModalComponent, {
      backdrop: 'static',
      class: 'modal-md modal-dialog-centered',
      initialState: {
        message: `Sei sicuro di voler cancellare il film ${name}?`
      }
    });

    modalRef.content.modalOutput.pipe(
      filter(outcome => !!outcome),
      switchMap(() => this._movieService.deleteMovie(id)),
      tap(() => modalRef.hide()),
      delay(500),
      tap(() => location.reload())
    ).subscribe();
  }

}
