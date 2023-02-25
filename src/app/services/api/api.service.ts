import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { GetParams, PostParams } from 'src/app/types/api.type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _hasRequestLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private readonly http: HttpClient) {}

  get hasRequestLoading$(): BehaviorSubject<boolean> {
    return this._hasRequestLoading$;
  }

  get<T>({ endpoint, options }: GetParams): Observable<T> {
    this._hasRequestLoading$.next(true);

    return this.http.get<T>(endpoint, options).pipe(
      tap(() => {
        this._hasRequestLoading$.next(false);
      })
    );
  }

  post<T>({ endpoint, body, options }: PostParams): Observable<T> {
    this._hasRequestLoading$.next(true);

    return this.http.post<T>(endpoint, body, options).pipe(
      tap(() => {
        this._hasRequestLoading$.next(false);
      })
    );
  }
}
