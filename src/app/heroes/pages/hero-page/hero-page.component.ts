import { Component, inject, Signal } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, of, switchMap } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {

  private heroService: HeroesService = inject(HeroesService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  heroSignal: Signal<Hero | undefined>;

  constructor() {
    this.heroSignal = toSignal(this.activatedRoute.params.pipe(
      switchMap((params) => this.heroService.getHeroById(params['id'])),
      catchError(() => {
        this.router.navigate(['/heroes/list']).then();
        return of(undefined);
      })
    ));
  }

  goBack(): void {
    this.router.navigate(['/heroes/list']).then();
  }
}
