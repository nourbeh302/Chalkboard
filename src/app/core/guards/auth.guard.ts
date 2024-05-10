import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  return of(router.createUrlTree(['/auth/login']));
  // return true
};
