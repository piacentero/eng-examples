import { Component, Input, TemplateRef } from '@angular/core';

export interface ITableColumn<T = 'string'> {
  label: string;
  propertyName: string;
  type: 'date' | 'string' | 'number' | 'boolean' | 'object';
}

@Component({
  selector: 'ecf-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> {

  @Input() columns: ITableColumn<T>[];
  @Input() items: T[];
  @Input() rowDetailTpl: TemplateRef<HTMLElement>;

  expandedRow: number;

  onRowExpand(index: number): void {
    if(this.expandedRow === index) this.expandedRow = null;
    else this.expandedRow = index;
  }

  isRowExpanded(index: number): boolean {
    return this.expandedRow === index;
  }

}
