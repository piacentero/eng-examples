import { Component } from '@angular/core';

@Component({
  selector: 'ecf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // items: string[] = ['1', '2', '3'];
  // items: Array<string> = [];
  items: { property: string, description: string }[] = [
    { property: 'uno', description: 'uno description' },
    { property: 'due', description: 'due description' },
    { property: 'tre', description: 'tre description' }
  ];

  property: string = 'A';
}
