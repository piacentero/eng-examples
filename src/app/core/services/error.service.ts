import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';

export interface IError {}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private _modalService: BsModalService
  ) { }

  showError(error: string): void {
    this._modalService.show(ErrorModalComponent, {
      backdrop: 'static',
      class: 'modal-md modal-dialog-centered error-modal',
      initialState: {
        errorMessage: error
      }
    })
  }
}
