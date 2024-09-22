import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { tap } from "rxjs";

export const authActiveGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuth().pipe(
    tap(isAuthenticated => {
      if (!isAuthenticated) {
        router.navigate(['./auth']).then()
      }
    })
  );

};
