import { Component, Input } from '@angular/core';
import { IForm } from '../../homepage.component';

@Component({
  selector: 'ecf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list: IForm[];

}
