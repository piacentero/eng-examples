import { Component, EventEmitter, Output } from '@angular/core';
import { IForm } from '../../homepage.component';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'ecf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  emailAddress: string;
  radio: string;
  notes: string;

  @Output() submit: EventEmitter<IForm> = new EventEmitter();

  constructor(
    private _formService: FormService
  ) {}

  onSubmit(): void {
    // this.submit.emit({
    //   emailAddress: this.emailAddress,
    //   radio: this.radio,
    //   notes: this.notes
    // });
    this._formService.dispatch({
      emailAddress: this.emailAddress,
      radio: this.radio,
      notes: this.notes
    });
    this.emailAddress = null;
    this.radio = null;
    this.notes = null;
  }

}
