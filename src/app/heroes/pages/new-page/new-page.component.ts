import { Component, inject } from '@angular/core';
import { Hero, Publisher, PublisherOptions } from "../../interfaces/hero.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  private heroService: HeroesService = inject(HeroesService);

  publisherOptions: PublisherOptions[] = [
    {
      id: 'DC',
      publisher: 'DC Comics'
    },
    {
      id: 'Marvel',
      publisher: 'Marvel Comics'
    }
  ]

  heroForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    alter_ego: new FormControl<string>(''),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });

  onSubmit(): void {

    if (this.heroForm.valid) {
      this.heroService.updateHero(this.currentHero).subscribe(heroR => alert(`Hero ${heroR.id} saved`));
    }
  }

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

}
