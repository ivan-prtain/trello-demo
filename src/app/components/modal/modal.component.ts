import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { modalType } from 'src/app/shared/enums';
import { BoardsService } from 'src/app/services/boards.service';
import { ColumnsService } from 'src/app/services/columns.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  showModal: boolean = false;
  subscription: Subscription | undefined;
  modalType: modalType = modalType.board;
  isCreateBoardModal: boolean = false;
  isCreateListModal: boolean = false;
  onSuccess: any;
  referenceId: number = 0
  boardName: string = "";
  listName: string = "";

  constructor(private uiService: UiService, private boardsService: BoardsService, private columnsService: ColumnsService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.resetData();
      this.showModal = value.showModal;
      this.modalType = value.modalType;
      this.onSuccess = value.onSuccess;
      this.isCreateBoardModal = this.modalType === modalType.board;
      this.isCreateListModal = this.modalType === modalType.list;
      this.referenceId = value.referenceId;
    });
  }

  resetData() {
    this.referenceId = 0
    this.boardName = "";
    this.listName = "";
  }

  toggleModal(): void {
    console.log(this.modalType)
    this.uiService.toggleModal();
  }

  onSubmit() {
    if (this.modalType === modalType.board) {
      if (!this.boardName) {
        alert("Board name is required");
        return
      }

      console.log(this.boardName)

      this.boardsService.createBoard(this.boardName).subscribe(() => {
        this.onSuccess()
        this.toggleModal();

      });
    } else if (this.modalType === modalType.list) {
      if (!this.listName) {
        alert("List name is required");
        return
      }

      console.log("bitni podaci za submit", this.listName, this.referenceId)
      this.columnsService.createColumn(this.listName, this.referenceId).subscribe(() => {
        this.onSuccess()
        this.toggleModal();
      })
    }
  }
}
