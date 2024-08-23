import { Component, inject } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, Observable, of, switchMap } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {

  private heroService: HeroesService = inject(HeroesService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  hero$: Observable<Hero | null>;


  constructor() {
    this.hero$ = this.activatedRoute.params.pipe(
      switchMap((params) => this.heroService.getHeroById(params['id'])),
      catchError(() => {
        this.router.navigate(['/heroes/list']).then();
        return of(null);
      })
    );
  }
}
