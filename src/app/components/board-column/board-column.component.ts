import { Component, Input } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';

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

  constructor(private cardsService: CardsService) { }

  @Input() columnData: ColumnDataType | undefined;

  cards: any;
  name: any;

  ngOnInit() {
    this.name = this.columnData?.name;

    if (this.columnData) {
      this.cardsService.getCards(this.columnData.id).subscribe(cards => {
        this.cards = cards;
        console.log("fetched cards for id", this.columnData?.id, "cards:", this.cards)
      })
    }
  }

}
