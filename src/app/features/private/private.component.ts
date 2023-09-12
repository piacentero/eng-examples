import { Component } from '@angular/core';
import { ITableColumn } from '../../shared/components/table/table.component';

@Component({
  selector: 'ecf-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent {

  columns: ITableColumn[] = [
    { label: 'Name', propertyName: 'name' },
    { label: 'Surname', propertyName: 'surname' },
    { label: 'Age', propertyName: 'age' }
  ];

  items: { name: string, surname: string, age: number, birthDate: Date, gender: 'M' | 'F' }[] = [
    { name: 'Paolo', surname: 'Rossi', age: 40, birthDate: new Date(), gender: 'M' },
    { name: 'Mario', surname: 'Bianchi', age: 14, birthDate: new Date(), gender: 'M' },
    { name: 'Alessandra', surname: 'Donzelli', age: 18, birthDate: new Date(), gender: 'F' },
    { name: 'Maria', surname: 'Annunziata', age: 22, birthDate: new Date(), gender: 'F' }
  ];

}
