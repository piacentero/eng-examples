import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { inject } from '@angular/core';

export const canMatchRoute: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  const roles: string[] = route.data.roles;

  return roles.some((role: 'ADMIN' | 'USER') => authService.isRole(role)) || router.createUrlTree(['/homepage']);
}
