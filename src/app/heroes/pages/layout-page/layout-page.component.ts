import { Component, viewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  // @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavSgn = viewChild.required(MatSidenav);

  sidebarItems = [
    { label: 'List', icon: 'label', url: './list' },
    { label: 'New', icon: 'add', url: './new' },
    { label: 'Search', icon: 'search', url: './search' },
  ];

  openCloseNav(): void {
    this.sidenavSgn().toggle().then();
  }

}
