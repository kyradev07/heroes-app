import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { map, tap } from "rxjs";

export const publicGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuth().pipe(
    tap(isAuthenticated => {
      if (isAuthenticated) {
        router.navigate(['/heroes']).then();
      }
    }),
    map(isAuthenticated => !isAuthenticated)
  );

};
