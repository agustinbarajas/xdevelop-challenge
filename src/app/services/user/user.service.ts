import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { ENDPOINTS } from 'src/app/constants/endpoints.const';
import { TOKEN_KEY } from 'src/app/constants/storage.const';
import { RequestResponse } from 'src/app/types/request-response.type';
import { UserLogin } from 'src/app/types/user-login.type';
import { StorageService } from '../storage/storage.service';
import { ApiService } from './../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _hasSession$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly api: ApiService,
    private readonly storageService: StorageService
  ) {}

  get hasSession$(): BehaviorSubject<boolean> {
    return this._hasSession$;
  }

  login(
    username: string,
    password: string
  ): Observable<RequestResponse<UserLogin>> {
    return this.api
      .post<RequestResponse<UserLogin>>({
        endpoint: ENDPOINTS.LOGIN,
        body: {
          username,
          password,
        },
      })
      .pipe(
        tap((response: RequestResponse<UserLogin>) => {
          this.storageService.setCookieItem(TOKEN_KEY, response?.data?.token);
          this.hasSession$.next(true);
        })
      );
  }

  logout() {
    this.storageService.deleteAllCookies();
    this.hasSession$.next(false);
  }

  hasLogin(): boolean {
    return !!this.storageService.getCookieItem(TOKEN_KEY);
  }
}
