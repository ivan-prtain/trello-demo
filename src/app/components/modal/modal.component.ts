import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  showModal: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => {
      this.showModal = value;
    });
  }

  toggleModal(): void {
    this.uiService.toggleModal();
  }
}
