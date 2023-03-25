import { Component } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.scss']
})
export class BoardsListComponent {
  boards = [];

  constructor(private boardsService: BoardsService) {

  }

  ngOnInit() {
    this.boardsService.getBoards().subscribe(boards => {
      this.boards = boards;
    });
    console.log(this.boards)
  }
}
