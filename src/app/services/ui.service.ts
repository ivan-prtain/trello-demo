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

  constructor() { }

  toggleModal(type: modalType = modalType.board): void {
    this.modalType = type;
    this.showModal = !this.showModal;
    this.modalState = { showModal: this.showModal, modalType: this.modalType }
    this.subject.next(this.modalState);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
