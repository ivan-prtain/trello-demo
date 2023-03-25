import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  board = {};
  boardId = 0;
  constructor(private route: ActivatedRoute, private boardService: BoardService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.boardId = params['id'];
    });

    this.boardService.getBoard(this.boardId).subscribe(board => {
      this.board = board;
      console.log("get board is called")
      console.log(this.boardId)
      console.log(board)
    })
  }

}
