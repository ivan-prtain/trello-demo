import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { modalType } from 'src/app/shared/enums';

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

  boardName: string = "";

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      console.log(value)
      this.showModal = value.showModal;
      this.modalType = value.modalType;
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

    const newBoard = {
      name: this.boardName,
    }
    console.log(this.boardName)
  }
}
