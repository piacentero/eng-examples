import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _role: string;

  constructor() {
    this._role = 'USER';
  }

  isAdmin(): boolean {
    return this._role === 'ADMIN';
  }

  isUser(): boolean {
    return this._role === 'USER';
  }

  isRole(role: 'ADMIN' | 'USER'): boolean {
    return this._role === role;
  }
}
