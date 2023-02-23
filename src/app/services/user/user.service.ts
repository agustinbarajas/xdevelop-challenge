import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from 'src/app/constants/endpoints.const';
import { ApiService } from './../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly api: ApiService) {}

  login(username: string, password: string): Observable<any> {
    return this.api.post<any>({
      endpoint: ENDPOINTS.LOGIN,
      body: {
        username,
        password,
      },
    });
  }
}
