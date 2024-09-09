import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Hero, Publisher, PublisherOptions } from "../../interfaces/hero.interface";
import { FormControl, FormGroup } from "@angular/forms";
import { HeroesService } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit {

  private heroService: HeroesService = inject(HeroesService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  isEditing: boolean;
  heroForm: FormGroup;
  currentHero: WritableSignal<Hero>;

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

  constructor() {
    this.isEditing = this.router.url.split('/')[2] === 'edit';

    this.heroForm = new FormGroup({
      id: new FormControl(''),
      superhero: new FormControl<string>('', { nonNullable: true }),
      alter_ego: new FormControl<string>(''),
      publisher: new FormControl<Publisher>(Publisher.DCComics),
      first_appearance: new FormControl<string>(''),
      characters: new FormControl<string>(''),
      alt_img: new FormControl<string>(''),
    });

    this.currentHero = signal<Hero>(this.heroForm.value);

    this.heroForm.valueChanges.subscribe(value => {
      this.currentHero.set(value);
    })
  }

  ngOnInit(): void {
    if (this.isEditing) {
      this.activatedRoute.params.pipe(
        switchMap((params) => this.heroService.getHeroById(params['id'])),
      ).subscribe({
        next: (value: Hero) => {
          this.heroForm.reset(value);
        },
        error: () => this.router.navigate(['/heroes/list']).then(),
      });
    }
  }

  onSubmit(): void {

    if (this.currentHero().id) {
      this.heroService.updateHero(this.currentHero()).subscribe(heroR => this.showSnackBar(`Hero ${heroR.superhero} updated!`));
    } else {
      this.heroService.addHero(this.currentHero()).subscribe(heroR => {
        this.showSnackBar(`Hero ${heroR.superhero} added!`);
        this.router.navigate(['/heroes/list']).then();
      });
    }
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Done', { duration: 3000 });
  }

}
