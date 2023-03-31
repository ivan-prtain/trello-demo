import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { modalType } from 'src/app/shared/enums';
import { BoardsService } from 'src/app/services/boards.service';

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
  onSuccess: any;

  boardName: string = "";

  constructor(private uiService: UiService, private boardsService: BoardsService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      console.log(value)
      this.showModal = value.showModal;
      this.modalType = value.modalType;
      this.onSuccess = value.onSuccess;
      this.isCreateBoardModal = this.modalType === modalType.board;
    });
  }

  toggleModal(): void {
    console.log(this.modalType)
    this.uiService.toggleModal();
  }

  onSubmit() {
    if (!this.boardName) {
      alert("Board name is required");
      return
    }

    console.log(this.boardName)

    this.boardsService.createBoard(this.boardName).subscribe(() => {
      this.onSuccess()
      this.toggleModal();

    });
  }
}
