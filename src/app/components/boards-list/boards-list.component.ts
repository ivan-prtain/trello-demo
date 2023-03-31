import { Component } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent {
  boards = [];

  constructor(private boardsService: BoardsService, private UiService: UiService) {

  }

  getBoards() {
    this.boardsService.getBoards().subscribe(boards => {
      this.boards = boards;
    });
  }

  ngOnInit() {
    this.getBoards();
  }

  onNewBoardClick() {
    this.UiService.toggleModal(undefined, this.getBoards.bind(this));
  }
}
