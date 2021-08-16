import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MainModule } from '../modules/main/main.module';

const URL = 'http://angular-test.blabs.us';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getAllInfo(): Observable<MainModule[]> {
    return this.http.get<MainModule[]>(URL);
  }
}
