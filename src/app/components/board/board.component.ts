import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnsService } from 'src/app/services/columns.service';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  boardName = ""
  columns = [];
  boardId = 0;
  constructor(private route: ActivatedRoute, private columnsService: ColumnsService, private boardService: BoardsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.boardId = params['id'];
    });

    this.columnsService.getColumns(this.boardId).subscribe(column => {
      this.columns = column;;
      console.log(this.columns)
    })

    this.boardService.getBoard(this.boardId).subscribe(board => {
      this.boardName = board.name
    })
  }

}
