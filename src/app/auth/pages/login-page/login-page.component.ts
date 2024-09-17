import { Component, inject } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  private authService: AuthService = inject(AuthService);
  private snackBar: MatSnackBar = inject(MatSnackBar);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private router: Router = inject(Router);

  loginForm;

  constructor() {
    this.loginForm = this.formBuilder.nonNullable.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.snackBar.open("Forms fields are required", "OK", { duration: 3000 });
      return;
    }

    const password = btoa(this.loginForm.controls.password.value);
    this.authService.login(this.loginForm.controls.userId.value, password).subscribe({
      next: user => this.router.navigateByUrl(`/`),
      error: () => this.snackBar.open('User Id not found', 'Done', { duration: 3000 })
    });
  }
}

