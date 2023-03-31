import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';
import { BoardsService } from 'src/app/services/boards.service';
import { UiService } from 'src/app/services/ui.service';
import { modalType } from 'src/app/shared/enums';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  boardName = ""
  columns = [];
  boardId = 0;
  constructor(private route: ActivatedRoute, private columnsService: ColumnsService, private boardService: BoardsService, private UiService: UiService) { }

  getLists() {
    this.columnsService.getColumns(this.boardId).subscribe(column => {
      this.columns = column;
    })
  }

  onNewListClick() {
    const formattedId = Number(this.boardId.toString().substring(1));
    this.UiService.toggleModal(modalType.list, this.getLists.bind(this), formattedId);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = params['id'];
    });

    this.getLists()

    this.boardService.getBoard(this.boardId).subscribe(board => {
      this.boardName = board.name
    })
  }

}
