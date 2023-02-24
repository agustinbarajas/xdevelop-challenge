import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  hasLogin = false;

  constructor(
    private readonly router: Router,
    private readonly userService: UserService
  ) {
    this.userService.hasSession$.subscribe((hasLogin: boolean) => {
      this.hasLogin = hasLogin;
    });
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
