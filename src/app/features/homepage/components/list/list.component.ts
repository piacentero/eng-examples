import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IForm } from '../../homepage.component';

@Component({
  selector: 'ecf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() list: IForm[];

  @Output() delete: EventEmitter<number> = new EventEmitter();

  onDelete(index: number): void {
    this.delete.emit(index);
  }

}
