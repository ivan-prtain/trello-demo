import { Component, Input } from '@angular/core';

interface ColumnDataType {
  id: number,
  name: string,
  cards: [],
}

@Component({
  selector: 'app-board-column',
  templateUrl: './board-column.component.html',
  styleUrls: ['./board-column.component.scss']
})
export class BoardColumnComponent {

  @Input() columnData: ColumnDataType | undefined;

  cards: any;

  ngOnInit() {
    console.log("columndata ", this.columnData);
    if (this.columnData?.cards) {
      this.cards = this.columnData.cards;
      console.log("cards ", this.cards)
    }
  }

}
