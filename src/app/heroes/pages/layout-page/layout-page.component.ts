import { Component, inject, signal, viewChild, WritableSignal } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { AuthService } from "../../../auth/services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../../auth/interfaces/user.interface";

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  user: WritableSignal<User | null> = signal(this.authService.getCurrentUser());

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

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']).then();
  }
}
