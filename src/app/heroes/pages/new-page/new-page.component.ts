import { Component } from '@angular/core';
import { Publisher } from "../../interfaces/hero.interface";

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  publishers: Publisher[] = [
    {
      id: 'DC',
      publisher: 'DC Comics'
    },
    {
      id: 'Marvel',
      publisher: 'Marvel Comics'
    }
  ]
}
