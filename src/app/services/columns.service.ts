import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColumnsService {

  private apiUrlBoard = 'http://localhost:8080/board-columns';

  constructor(private http: HttpClient) { }

  getColumns(id: number): Observable<any> {
    const formattedId = id.toString().substring(1);
    const endpoint = this.apiUrlBoard + "/" + formattedId;
    return this.http.get(endpoint);
  }

  createColumn(columnName: string, referenceId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = { name: columnName, reference: referenceId };
    return this.http.post(this.apiUrlBoard, body, httpOptions);
  }
}
