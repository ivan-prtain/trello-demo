import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private apiUrlBoards = 'http://localhost:8080/boards';

  constructor(private http: HttpClient) { }

  getBoards(): Observable<any> {
    return this.http.get(this.apiUrlBoards);
  }

  getBoard(id: number): Observable<any> {
    const formattedId = id.toString().substring(1);
    const endpoint = this.apiUrlBoards + "/" + formattedId;
    return this.http.get(endpoint);
  }

  createBoard(boardName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { name: boardName };
    return this.http.post(this.apiUrlBoards, body, httpOptions);
  }
}
