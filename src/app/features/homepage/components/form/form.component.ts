import { Component, EventEmitter, Output } from '@angular/core';
import { IForm } from '../../homepage.component';

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

  onSubmit(): void {
    this.submit.emit({
      emailAddress: this.emailAddress,
      radio: this.radio,
      notes: this.notes
    });
  }

}
