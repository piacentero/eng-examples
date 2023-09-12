import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', loadChildren: () => import('./features/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'private', loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
