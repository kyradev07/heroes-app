import { Component, input, InputSignal } from '@angular/core';
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  hero: InputSignal<Hero> = input.required<Hero>();

}
