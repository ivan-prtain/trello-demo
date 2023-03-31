import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { modalType } from '../shared/enums';



@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showModal: boolean = false;
  private modalType: modalType = modalType.board;
  private modalState: any;
  private subject = new Subject<any>();
  private onSuccess: any;

  constructor() { }

  toggleModal(type: modalType = modalType.board, onSuccess?: () => void): void {
    this.modalType = type;
    this.onSuccess = onSuccess;
    this.showModal = !this.showModal;
    this.modalState = { showModal: this.showModal, modalType: this.modalType, onSuccess: this.onSuccess };
    this.subject.next(this.modalState);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
