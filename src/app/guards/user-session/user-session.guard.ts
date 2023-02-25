import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserSessionGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {}

  canActivate(): boolean {
    if (!this.userService.hasLogin()) {
      this.router.navigate(['/login'], { replaceUrl: true });
      return false;
    }
    return true;
  }
}
