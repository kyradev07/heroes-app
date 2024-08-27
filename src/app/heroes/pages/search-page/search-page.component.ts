import { Component, inject } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Hero } from "../../interfaces/hero.interface";
import { HeroesService } from "../../services/heroes.service";
import { Observable, of } from "rxjs";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  private heroService: HeroesService = inject(HeroesService);
  private router: Router = inject(Router);
  searchText: FormControl = new FormControl<string>('');
  heroes$: Observable<Hero[]> | undefined;

  searchHero() {
    if (this.searchText.value.trim().length == 0) {
      this.heroes$ = of([]);
      return;
    }
    this.heroes$ = this.heroService.getHeroesByQuery(this.searchText.value);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      return;
    }
    this.searchText.setValue(event.option.value.superhero);
    this.router.navigate([`/heroes/${event.option.value.id}`]).then();
  }
}
