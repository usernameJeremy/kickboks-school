import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';
import { CrudService } from '../services/crud.service';

export const authGuard: CanActivateFn = (route, state) => {
  const crudService = inject(CrudService);
  const router = inject(Router);
  
  const token = crudService.getToken();
  
  if (token) {
    return true;
  } else {
    router.navigate(['/admin']);
    return false;
  }
};
