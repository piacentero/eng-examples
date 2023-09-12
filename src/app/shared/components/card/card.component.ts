import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ecf-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string;
  @Input() subtitle: string;
  // @Input() bodyRef: TemplateRef<HTMLElement>;

}
