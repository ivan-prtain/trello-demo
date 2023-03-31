import { Component, Input } from '@angular/core';

interface CardDataType {
  id: number,
  name: string,
  message: string,
}

@Component({
  selector: 'app-column-card',
  templateUrl: './column-card.component.html',
  styleUrls: ['./column-card.component.scss']
})
export class ColumnCardComponent {
  @Input() cardData: CardDataType | undefined;

  ngOnInit() {
    // console.log("carddata ", this.cardData);
  }
}
