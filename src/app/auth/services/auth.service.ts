import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { User } from "../interfaces/user.interface";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.baseUrl;
  private user: WritableSignal<User | null> = signal<User | null>(null);

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): User | null {
    return this.user() === null
      ? null
      : structuredClone(this.user());
  }

  login(userId: string, password: string): Observable<User | null> {
    console.log(password);
    return this.http.get<User>(`${this.url}/users/${userId}`).pipe(
      tap((user: User) => this.user.set(user)),
      tap((user: User) => localStorage.setItem('token', user.id.toString()))
    );
  }

  logout(): void {
    this.user.set(null);
    localStorage.clear();
  }

}
