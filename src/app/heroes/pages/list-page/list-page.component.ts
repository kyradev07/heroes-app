import { Component } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { Observable } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html'
})
export class ListPageComponent {

  heroes$: Observable<Hero[]>;


  constructor(private heroesService: HeroesService) {
    this.heroes$ = this.heroesService.getHeroes();
  }

}
