import { Component } from '@angular/core';

@Component({
  selector: 'ecf-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  hover: boolean = false;
  pippo: string = 'ZEBRA';

  onMouseOver(): void {
    this.hover = true;
  }

  onMouseLeave(): void {
    this.hover = false;
  }

  onHandleHover(value: boolean): void {
    console.log('*********', value);
  }

}
