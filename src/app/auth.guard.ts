import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('authToken');
  const userRole = localStorage.getItem('role'); 

  if (!token) {
    return router.createUrlTree(['/unauthorized']);
  }

  const requiredRole = route.data['role'] as string;

  if (requiredRole) {
    if (userRole === requiredRole) {
      return true;
    } else {
      return router.createUrlTree(['/unauthorized'], { queryParams: { role: requiredRole } });
    }
  }

  return true;
};

