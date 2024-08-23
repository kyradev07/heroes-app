import { Component, inject } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Observable } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent {

  private heroesService: HeroesService = inject(HeroesService);
  heroes$: Observable<Hero[]>;

  constructor() {
    this.heroes$ = this.heroesService.getHeroes();
  }

}
