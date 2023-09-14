import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../models/interfaces/movie.interface';
import { Observable, switchMap, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ecf-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {

  movie$: Observable<IMovie>;

  form: FormGroup;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      id: this._formBuilder.control({ value: null, disabled: true }),
      name: this._formBuilder.control(null, Validators.required),
      director: this._formBuilder.control(null, Validators.required),
      genre: this._formBuilder.control(null, Validators.required),
      releaseDate: this._formBuilder.control(null, Validators.required),
      runningTime: this._formBuilder.control(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.movie$ = this._movieService.getMovie(this._activatedRoute.snapshot.paramMap.get('id')).pipe(
      tap(movie => this.form.patchValue(movie))
    );
    // this.movie$ = this._activatedRoute.paramMap.pipe(
    //   switchMap(paramMap => this._movieService.getMovie(paramMap.get('id')))
    // );
  }

  isInvalid(formControlName: string): boolean {
    return this.form.get(formControlName).touched && this.form.get(formControlName).invalid;
  }

  onReset(): void {
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    console.log(this.form.getRawValue());
  }

}
