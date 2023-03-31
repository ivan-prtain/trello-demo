import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss']
})
export class BoardCardComponent {
  @Input() boardData: any;

  ngOnInit() {
    //console.log("boarddata,", this.boardData);
  }

}
