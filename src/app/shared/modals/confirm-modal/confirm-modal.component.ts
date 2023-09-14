import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'ecf-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  message?: string;

  modalOutput: Subject<boolean> = new Subject();

  constructor(
    private _modalService: BsModalService
  ) {}

  onCloseModal(outcome?: boolean): void {
    this.modalOutput.next(outcome);
    if(!outcome) this._modalService.hide();
  }

}
