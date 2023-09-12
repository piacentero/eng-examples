import { Component } from '@angular/core';

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
export class HomepageComponent {

  list: IForm[] = [];

  onSubmit(item: IForm): void {
    this.list.push(item);
  }

  onDelete(index: number): void {
    // this.list.splice(index, 1);
    this.list = this.list.filter((_, i) => i !== index);
  }

}
