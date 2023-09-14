import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { ListChildComponent } from './components/list-child/list-child.component';
import { ListChild2Component } from './components/list-child2/list-child2.component';
import { movieResolver } from './resolvers/movie.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: MoviesComponent,
    children: [
      {
        path: 'child1',
        component: ListChildComponent
      },
      {
        path: 'child2',
        component: ListChild2Component
      },
    ]
  },
  {
    path: 'create-edit',
    component: EditMovieComponent
  },
  {
    path: 'create-edit/:id',
    component: EditMovieComponent,
    // resolve: {
    //   movie: movieResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
