import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ecf-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent {

  errorMessage?: string;

  constructor(
    private _modalService: BsModalService
  ) {}

  onCloseModal(): void {
    this._modalService.hide();
  }

}
