import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../modules/main/main.module';

// const URL = 'http://angular-test.blabs.us';
// const deletetURL = 'http://angular-test.blabs.us?id=';

const URL = 'http://localhost:3000/itens';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getAllInfo(): Observable<Item[]> {
    return this.http.get<Item[]>(URL);
  }

  deleteItem(id: number) {
    return this.http.delete(`${URL}/${id}`, {
      observe: 'response',
    });
  }

  sendItem(data: any) {
    return this.http.post(`${URL}`, data);
  }
}
