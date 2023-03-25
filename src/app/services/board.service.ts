import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private apiUrlBoard = 'http://localhost:5000/boardDetails';

  constructor(private http: HttpClient) { }

  getBoard(id: number): Observable<any> {
    const formattedId = id.toString().substring(1);
    const endpoint = this.apiUrlBoard + formattedId;
    console.log("endpoint", endpoint)
    return this.http.get(endpoint);
  }
}
