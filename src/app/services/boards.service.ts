import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private apiUrlBoards = 'http://localhost:5000/boards';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<any> {
    return this.http.get(this.apiUrlBoards);
  }
}
