import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column-card',
  templateUrl: './column-card.component.html',
  styleUrls: ['./column-card.component.scss']
})
export class ColumnCardComponent {
  @Input() cardData: any;



}
