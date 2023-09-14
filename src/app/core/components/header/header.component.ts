import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'ecf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMenu: boolean = false;

  constructor(
    private _authService: AuthService
  ) {}

  isAdmin(): boolean {
    return this._authService.isAdmin();
  }

  isUser(): boolean {
    return this._authService.isUser();
  }

}
