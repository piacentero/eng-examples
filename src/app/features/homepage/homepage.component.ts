import { Component, OnInit, ViewChild } from '@angular/core';
import { FormService } from './services/form.service';
import { FormComponent } from './components/form/form.component';

export interface IForm {
  emailAddress: string;
  radio: string;
  notes: string
}

@Component({
  selector: 'ecf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // @ViewChild(FormComponent) ecf: FormComponent;
  @ViewChild('ecfForm') ecf: FormComponent;

  list: IForm[] = [];

  constructor(
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.ecf);
    }, 3000);
  }

  // onSubmit(item: IForm): void {
  //   this.list.push(item);
  // }

  onDelete(index: number): void {
    // this.list.splice(index, 1);
    this.list = this.list.filter((_, i) => i !== index);
  }

}
