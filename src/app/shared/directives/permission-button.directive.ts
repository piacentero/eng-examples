import { AfterViewInit, Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[ecfPermissionButton]'
})
export class PermissionButtonDirective implements OnChanges, AfterViewInit {

  @Input() role: 'ADMIN' | 'USER' = 'ADMIN';

  @HostBinding('disabled') isDisabled: boolean = false;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(this._authService.isRole(changes.role.currentValue)) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  ngAfterViewInit() {
    // if(this._authService.isAdmin()) {
    //   console.log('ADMIN');
    //   this.isDisabled = false;
    // } else {
    //   console.log('USER');
    //   this.isDisabled = true;
    // }
  }

}
