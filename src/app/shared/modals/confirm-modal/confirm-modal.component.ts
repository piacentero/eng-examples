import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject, take, tap } from 'rxjs';

@Component({
  selector: 'ecf-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent<T> {

  message?: string;
  confirmAction$: Observable<T>;

  modalOutput: Subject<boolean> = new Subject();

  constructor(
    private _modalService: BsModalService
  ) {}

  onCloseModal(outcome?: boolean): void {
    if(!!outcome) {
      this.confirmAction$.pipe(
        take(1),
        tap(() => this.modalOutput.next(outcome))
      ).subscribe();
    } else {
      this.modalOutput.next(outcome)
    }
  }

}
