import { Component, inject, Signal } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Hero } from "../../interfaces/hero.interface";
import { toSignal } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent {

  private heroesService: HeroesService = inject(HeroesService);
  heroesSignal: Signal<Hero[] | undefined>;

  constructor() {
    this.heroesSignal = toSignal(this.heroesService.getHeroes());
  }


}
