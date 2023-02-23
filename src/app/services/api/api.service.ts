import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetParams, PostParams } from 'src/app/types/api.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  get<T>({ endpoint, options }: GetParams): Observable<T> {
    return this.http.get<T>(endpoint, options);
  }

  post<T>({ endpoint, body, options }: PostParams): Observable<T> {
    return this.http.post<T>(endpoint, body, options);
  }
}
