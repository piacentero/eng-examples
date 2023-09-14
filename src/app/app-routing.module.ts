import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canMatchRoute } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage',
    loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'private',
    loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule),
    canMatch: [canMatchRoute],
    data: {
      roles: ['ADMIN']
    }
  },
  {
    path: 'movies',
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule),
    canMatch: [canMatchRoute],
    data: {
      roles: ['USER']
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
