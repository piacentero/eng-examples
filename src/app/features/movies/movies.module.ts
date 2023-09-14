import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { SharedModule } from '../../shared/shared.module';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ListChildComponent } from './components/list-child/list-child.component';
import { ListChild2Component } from './components/list-child2/list-child2.component';


@NgModule({
  declarations: [
    MoviesComponent,
    EditMovieComponent,
    ListChildComponent,
    ListChild2Component
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
