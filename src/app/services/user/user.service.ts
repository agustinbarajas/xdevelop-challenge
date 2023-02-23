import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

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
  constructor(
    private readonly api: ApiService,
    private readonly storageService: StorageService
  ) {}

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
        })
      );
  }
}
