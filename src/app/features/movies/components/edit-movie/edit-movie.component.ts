import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IActor, IMovie } from '../../models/interfaces/movie.interface';
import { debounceTime, distinctUntilChanged, Observable, skip, Subscription, switchMap, tap } from 'rxjs';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface IMovieForm {
  id: FormControl<string>;
  name: FormControl<string>;
  director: FormControl<string>;
  genre: FormControl<string>;
  releaseDate: FormControl<Date>;
  runningTime: FormControl<number>;
  actors: FormArray<FormGroup<IActorForm>>;
}

export interface IActorForm {
  name: FormControl<string>;
  surname: FormControl<string>;
}

@Component({
  selector: 'ecf-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit, OnDestroy {

  movie$: Observable<IMovie>;

  form: FormGroup<IMovieForm>;

  saved: boolean = false;

  private _genreSubscription: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      id: this._formBuilder.control<string>({ value: null, disabled: true }),
      name: this._formBuilder.control<string>(null, Validators.required),
      director: this._formBuilder.control<string>(null, Validators.required),
      genre: this._formBuilder.control<string>(null, Validators.required),
      releaseDate: this._formBuilder.control<Date>(null, Validators.required),
      runningTime: this._formBuilder.control<number>(null, [Validators.required, Validators.min(1)]),
      actors: this._formBuilder.array<FormGroup<IActorForm>>([])
    });
  }

  get actorsArray(): FormArray<FormGroup<IActorForm>> {
    return this.form.get('actors') as FormArray;
  }

  get actorsForm(): FormGroup<IActorForm>[] {
    return (this.form.get('actors') as FormArray).controls as FormGroup<IActorForm>[];
  }

  get actorsArrayInvalid(): boolean {
    return this.actorsForm.some(form => form.invalid);
  }

  ngOnInit(): void {
    this.movie$ = this._movieService.getMovie(this._activatedRoute.snapshot.paramMap.get('id')).pipe(
      tap(movie => {
        movie.actors.forEach(() => this.onAddActor())
      }),
      tap(movie => this.form.patchValue({
        ...movie,
        releaseDate: !!movie.releaseDate ? new Date(movie.releaseDate) : null
      }))
    );

    // this.movie$ = this._activatedRoute.paramMap.pipe(
    //   switchMap(paramMap => this._movieService.getMovie(paramMap.get('id')))
    // );

    // this._genreSubscription = this.form.get('genre').valueChanges.pipe(
    //   skip(1),
    //   distinctUntilChanged(),
    //   debounceTime(300),
    //   tap(() => {
    //     this.form.get('releaseDate').reset();
    //   })
    // ).subscribe();
  }

  ngOnDestroy(): void {
    // this._genreSubscription.unsubscribe();
  }

  isInvalid(form: FormGroup, formControlName: string): boolean {
    return form.get(formControlName).touched && form.get(formControlName).invalid;
  }

  onAddActor(): void {
    this.actorsForm.push(this._formBuilder.group({
      name: this._formBuilder.control<string>(null, Validators.required),
      surname: this._formBuilder.control<string>(null, Validators.required)
    }));
  }

  onRemoveActor(index: number): void {
    (this.form.get('actors') as FormArray<FormGroup<IActorForm>>).removeAt(index);
  }

  onReset(): void {
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    const movie = this.form.getRawValue();
    this._movieService.updateMovie({ ...movie, releaseDate: movie.releaseDate.getTime() } as IMovie).pipe(
      tap(() => this.saved = true)
    ).subscribe();
  }

}
