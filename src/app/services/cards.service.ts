import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrlCards = 'http://localhost:8080/cards/';

  constructor(private http: HttpClient) { }

  getCards(id: number): Observable<any> {
    const endpoint = this.apiUrlCards + id;
    return this.http.get(endpoint);
  }
}
