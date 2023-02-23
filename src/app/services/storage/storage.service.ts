import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly prefixName = '--ga-';

  constructor(private readonly cookieService: CookieService) {}

  getCookieItem(name: string): string {
    if (this.cookieService.check(`${this.prefixName}-${name}`)) {
      return this.cookieService.get(`${this.prefixName}-${name}`);
    }
    return '';
  }

  setCookieItem(name: string, value: string): void {
    this.cookieService.set(`${this.prefixName}-${name}`, value, {
      expires: 2,
      path: '/',
      sameSite: 'Strict',
    });
  }

  deleteCookieItem(name: string): void {
    if (this.cookieService.check(`${this.prefixName}-${name}`)) {
      this.cookieService.delete(`${this.prefixName}-${name}`);
    }
  }

  deleteAllCookies(): void {
    this.cookieService.deleteAll();
  }
}
